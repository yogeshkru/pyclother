const userModel = require("../model/userModel");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const customError = require("../utils/customError");
const { sendUserToken } = require("../utils/jwtToken");

//inbuild module
const crypto = require("crypto");
//send email
const sendEmail = require("../utils/sendMail");
const { default: mongoose } = require("mongoose");

//Signup
exports.createUser = asyncErrorhandler(async (req, res, next) => {
  try {
    const userAlready = await userModel.findOne({ user_email: req.body.email });
    if (userAlready) {
      return next(new customError("Email is already exists", 409));
    }

    let user = await userModel.create(req.body);

    user = {
      _id: user._id,
      name: user.user_name,
      email: user.user_email,
      phone: user.user_phone,
    };

    sendUserToken(user, 201, res);
  } catch (err) {
    return next(new customError(err.message, 400));
  }
});

//Login
exports.login = asyncErrorhandler(async (req, res, next) => {
  try {
    const { user_email, user_password } = req.body;

    if (!user_email || !user_password) {
      const error = new customError(
        "Please provide email & password for login",
        400
      );
      return next(error);
    }
    let user = await userModel.findOne({ user_email }).select("+password");

    if (!user) {
      const error = new customError("User not found", 404);
      return next(error);
    }

    // user.comparePasswordInDb
    const isMatch = await user.comparePasswordInDb(
      user_password,
      user.user_password
    );
    if (!isMatch) {
      const error = new customError("incorrect password", 400);
      return next(error);
    }
    user = {
      _id: user._id,
      name: user.user_name,
      email: user.user_email,
    };

    sendUserToken(user, 200, res);
  } catch (err) {
    return next(new customError(err.message, 500));
  }
});

//forget password

exports.forgetPassword = asyncErrorhandler(async (req, res, next) => {
  const { user_email } = req.body;
  const findUser = await userModel.findOne({ user_email });
  if (!findUser) {
    return next(
      new customError(`we could not find the user email with given email `, 404)
    );
  }
  const resetToken = await findUser.createResetPasswordToken();
  await findUser.save({ validateBeforeSave: false });

  const reseturl = `${req.protocol}://${req.get(
    "host"
  )}/users/resetpassword/${resetToken}`;
  const message = `we have received a password reset required. please use below link to reset passsword\n\n ${reseturl} \n\n this link valid for 10 minutes`;
  try {
    await sendEmail({
      email: findUser.user_email,
      subject: "password change request received",
      message: message,
    });
  } catch (err) {
    findUser.user_passwordResetToken = undefined;
    findUser.user_passwordResetTokenExpired = undefined;
    findUser.save({ validateBeforeSave: false });
    return next(
      new customError(`there was a error sending password reset email`, 500)
    );
  }
});

//resetPassword
exports.resetPassword = asyncErrorhandler(async (req, res, next) => {
  const token = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");
  const update = await userModel.findOne({
    user_passwordResetToken: token,
    user_passwordResetTokenExpired: { $gt: Date.now() },
  });

  if (!update) {
    const err = new customError("tokens is invalid or has expired", 400);
    return next(err);
  }
  update.user_password = req.body.password;
  update.user_passwordResetToken = undefined;
  update.user_passwordResetTokenExpired = undefined;
  update.user_passwordChangedAt = Date.now();
  await update.save();

  sendUserToken(user, 200, res);
});

exports.updatePasswordByUserLogin = asyncErrorhandler(
  async (req, res, next) => {
    //  Get Current User Data From DataBase
    const user = await userModel.findById(req.user._id).select("+password");

    // check if the password

    if (
      !(await user.comparePasswordInDb(
        req.body.currentPassword,
        user.user_password
      ))
    ) {
      return next(
        new customError("The current password you provided is wrong", 401)
      );
    }

    user.user_password = req.body.password;
    // user.confirmPassword = req.body.confirmPassword;
    await user.save();

    // Login User & Send Jwt
    user = {
      _id: user._id,
      name: user.user_name,
      email: user.user_email,
    };
    sendUserToken(user, 201, res);
  }
);

exports.updatePasswordByUserLogin = asyncErrorhandler(
  async (req, res, next) => {
    const user = userModel.findById(req.user._id).select("user_password");
    if (
      !(await user.comparePasswordInDb(
        req.body.currentPassword,
        user.user_password
      ))
    ) {
      return next(
        new customError("The current password you provided is wrong", 401)
      );
    }

    user.user_password = req.body.user_password;
    await user.save();

    const data = {
      _id: user._id,
      name: user.user_name,
      email: user.user_email,
    };

    return await sendUserToken(data, 200, res);
  }
);

exports.fetchAllUser = asyncErrorhandler(async (req, res) => {
  const allUser = await userModel.find();
  res.status(200).json({ status: "success", allUser });
});

exports.blockUser = asyncErrorhandler(async (req, res, next) => {
  const { id } = req.params;

  try {
    const block = await userModel.findByIdAndUpdate(
      id,
      { user_active: false },
      { runValidators: true, new: true }
    );

    res.status(200).json({ message: "Userblocked", block });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

exports.unblockUser = asyncErrorhandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const unblock = await userModel.findByIdAndUpdate(
      id,
      { user_active: true },
      { runValidators: true, new: true }
    );

    res.status(200).json({ message: "userunblocked", unblock });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

exports.deleteMe = asyncErrorhandler(async (req, res) => {
  await userModel.findByIdAndUpdate(
    req.user._id,
    { user_active: false },
    { runValidators: true, new: true }
  );
});

// **************************************************************************

const filterReqObj = (obj, ...allowedFileds) => {
  const newObj = {};
  Object.keys(obj).forEach((prop) => {
    if (allowedFileds.includes(prop)) newObj[prop] = obj[prop];
  });

  return newObj;
};

exports.updateMe = asyncErrorhandler(async (req, res, next) => {
  if (req.body.user_password) {
    return next(
      new customError(
        "You cannot update your password using this endpoint",
        400
      )
    );
  }

  const filterObj = filterReqObj(
    req.body,
    "user_name",
    "admin_email",
    "admin_phone"
  );

  const updateUser = await userModel.findByIdAndUpdate(
    req.user._id,
    filterObj,
    { runValidators: true, new: true }
  );

  res.status(200).json({ message: "Userprofileupdated", updateUser });
});

// ************************************************************************

exports.getUserById = asyncErrorhandler(async (req, res, next) => {
  const { id } = req.params;

  const user = await userModel.findById(id);
  if (!user) {
    const error = new customError("user with that Id is not found", 404);
    next(error);
  }

  res.status(200).json({ status: "success", data: { user } });
});

exports.getUserDelete = asyncErrorhandler(async (req, res, next) => {
  const { id } = req.params;

  const user = await userModel.findByIdAndDelete(id);

  if (!user) {
    const error = new customError("User with Id is not found", 404);
    return next(error);
  }
  res.status(200).json({ status: "Deleted", data: null });
});

exports.fetchAllUser = asyncErrorhandler(async (req, res, next) => {
  const Allusers = await userModel.find();
  res.status(200).json({ message: "success", Allusers });
});

exports.getWishList = asyncErrorhandler(async (req, res) => {
  const { _id } = req.user;

  const Userwishlist = await userModel.aggregate([
    { $match: { _id: new mongoose.Types.ObjectId(_id) } },
    {
      $lookup: {
        from: "tbl_products",
        localField: "user_wishlist",
        foreignField: "_id",
        as: "wishlist",
      },
    },
  ]);

  res.status(200).json({ getBlog: Userwishlist[0] });
});





exports.logout = asyncErrorhandler(async (req, res, next) => {
  const { user } = req.cookies;

  if (!user) {
    const error = new customError("No token in cookies");
    return next(error);
  }

  const options = {
    maxAge: 0,
    httpOnly: true,
  };
  res.cookie("user", null, options);
  res.status(200).json({ message: "Logout" });
});
