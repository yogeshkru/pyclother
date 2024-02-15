const userModel = require("../model/userModel");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const customError = require("../utils/customError");
const { sendUserToken } = require("../utils/jwtToken");

//inbuild module
const crypto = require("crypto");
//send email
const sendEmail = require("../utils/sendMail");
const { default: mongoose } = require("mongoose");

class UserController {
  createUser = async (req, res, next) => {
    try {
      const userAlready = await userModel.findOne({
        user_email: req.body.user_email,
      });
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

      sendUserToken(user, 201, res, { message: "Your account Created" });
    } catch (err) {
      return next(new customError(err.message, 400));
    }
  };

  //Login
  login = async (req, res, next) => {
    try {
      const { user_email, user_password } = req.body;

      if (!user_email || !user_password) {
        const error = new customError(
          "Please provide email & password for login",
          400
        );
        return next(error);
      }
      let user = await userModel
        .findOne({ user_email })
        .select("+user_password");

      if (!user) {
        const error = new customError("User Not Found", 404);
        return next(error);
      }

      // user.comparePasswordInDb
      const isMatch = await user.comparePasswordInDb(
        user_password,
        user.user_password
      );
      if (!isMatch) {
        const error = new customError("Incorrect Password", 400);
        return next(error);
      }
      user = {
        _id: user._id,
        name: user.user_name,
        email: user.user_email,
      };

      sendUserToken(user, 200, res, { message: "Login Successfully" });
    } catch (err) {
      return next(new customError(err.message, 500));
    }
  };

  //forget password

  forgetPassword = async (req, res, next) => {
    const { user_email } = req.body;
    const findUser = await userModel.findOne({ user_email });
    if (!findUser) {
      return next(
        new customError(
          `we could not find the ${user_email} on the server `,
          404
        )
      );
    }
    const resetToken = await findUser.createResetPasswordToken();
    await findUser.save({ validateBeforeSave: false });

    const reseturl = `http://localhost:5173/reset/${resetToken}`;
    const message = `we have received a password reset request yogesh. please use below link to reset passsword\n\n ${reseturl} \n\n this link valid for 10 minutes`;

    try {
      await sendEmail({
        email: findUser.user_email,
        subject: "password change request received",
        message: message,
      });

      res.status(200).json({
        message: `Password reset token send to your email ${findUser.user_email} `,
      });
    } catch (err) {
      findUser.user_passwordResetToken = undefined;
      findUser.user_passwordResetTokenExpired = undefined;
      findUser.save({ validateBeforeSave: false });
      return next(new customError(err.message, 500));
    }
  };

  //resetPassword
  resetPassword = async (req, res, next) => {
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

    sendUserToken(update, 200, res, {
      message: "Your password has been successfully changed",
    });
  };

  updatePasswordByUserLogin = async (req, res, next) => {
    //  Get Current User Data From DataBase
    const user = await userModel
      .findById(req.user._id)
      .select("+user_password");

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
  };

  fetchAllUser = async (req, res) => {
    const allUser = await userModel.find();
    res.status(200).json({ status: "success", allUser });
  };

  blockUser = async (req, res, next) => {
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
  };

  unblockUser = async (req, res, next) => {
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
  };

  deleteMe = async (req, res) => {
    await userModel.findByIdAndUpdate(
      req.user._id,
      { user_active: false },
      { runValidators: true, new: true }
    );
    res.state(200).json({ message: "Account deleted" });
  };

  // *********************************************************************
  // filterReqObj = (obj, ...allowedFileds) => {
  //   const newObj = {};
  //   Object.keys(obj).forEach((prop) => {
  //     if (allowedFileds.includes(prop)) newObj[prop] = obj[prop];
  //   });

  //   return newObj;
  // };

  // updateMe = async (req, res, next) => {
  //   if (req.body.user_password) {
  //     return next(
  //       new customError(
  //         "You cannot update your password using this endpoint",
  //         400
  //       )
  //     );
  //   }

  //   const filterObj = filterReqObj(
  //     req.body,
  //     "user_name",
  //     "user_email",
  //     "user_phone",

  //   );

  //   const updateUser = await userModel.findByIdAndUpdate(
  //     req.user._id,
  //     filterObj,
  //     { runValidators: true, new: true }
  //   );

  //   res.status(200).json({ message: "Userprofileupdated", updateUser });
  // };

  filterReqObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach((prop) => {
      if (allowedFields.includes(prop)) newObj[prop] = obj[prop];
    });

    return newObj;
  };

  updateMe = async (req, res, next) => {
    if (req.body.user_password) {
      return next(
        new customError(
          "You cannot update your password using this endpoint",
          400
        )
      );
    }

    const filterObj = this.filterReqObj(
      req.body,
      "user_name",
      "user_email",
      "user_phone"
    );

    const updatedUser = await userModel.findByIdAndUpdate(
      req.user._id,
      filterObj,
      { runValidators: true, new: true }
    );

    const  updateUser={
     user_email:updatedUser?.user_email,
     user_name:updatedUser?.user_name,
     user_phone:updatedUser?.user_phone

    }

    res.status(200).json({ message: "User profile updated", updateUser });
  };

  // **********************************************************************
  getUserById = async (req, res, next) => {
    const { id } = req.params;

    const user = await userModel.findById(id);
    if (!user) {
      const error = new customError("user with that Id is not found", 404);
      return next(error);
    }

    res.status(200).json({ status: "success", data: { user } });
  };

  userProfile = async (req, res, next) => {
    const { _id } = req.user;
    const user = await userModel.findById(_id);
    if (!user) {
      const error = new customError("user with that Id is not found", 404);
      return next(error);
    }
    res.status(200).json({ status: "success", data: { user } });
  };

  deleteUser = async (req, res, next) => {
    const { id } = req.params;

    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
      const error = new customError("User with Id is not found", 404);
      return next(error);
    }
    res.status(200).json({ status: "Deleted", data: null });
  };

  getWishList = async (req, res) => {
    const { _id } = req.user;

    const Userwishlist = await userModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(_id) } },
      {
        $lookup: {
          from: "tbl_products",
          localField: "user_wishlist",
          foreignField: "_id",
          as: "user_wishlist",
        },
      },
    ]);
    const {  user_wishlist } = Userwishlist[0];

    res.status(200).json({ getBlog: user_wishlist });



  
  };

  logout = async (req, res, next) => {
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
  };


   getAllUser = async(req,res,next)=>{
    
  
    const allUser = await userModel.find()

    res.status(200).json({allUser})

   }
   

}

module.exports = UserController;
