const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const customError = require("../utils/customError");
//inbuild module
const crypto = require("crypto");
const util = require("util");

//send email
const sendEmail = require("../utils/sendMail");
//Token generate
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECERT_STRING, {
    expiresIn: process.env.EXPIRE_DAYS,
  });
};

const createSendResponse = function (user, statusCode, res) {
  const token = generateToken(user._id);

  res.status(statusCode).json({ status: "success", token, data: { user } });
};

//Signup
exports.createUser = asyncErrorhandler(async (req, res, next) => {
  try {
    const userAlready = await userModel.findOne({ email: req.body.email });
    if (userAlready) {
      return next(new customError("Email is already exists", 409));
    }

    let user = await userModel.create(req.body);

    user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };

    createSendResponse(user, 201, res);
  } catch (err) {
    return next(new customError(err.message, 400));
  }
});

//Login
exports.login = asyncErrorhandler(async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new customError(
        "Please provide email & password for login",
        400
      );
      return next(error);
    }
    let user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      const error = new customError("User not found", 404);
      return next(error);
    }

    // user.comparePasswordInDb
    const isMatch = await user.comparePasswordInDb(password, user.password);
    if (!isMatch) {
      const error = new customError("incorrect password", 400);
      return next(error);
    }
    user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      // phone: user.phone,
    };

    createSendResponse(user, 200, res);
  } catch (err) {
    return next(new customError(err.message, 500));
  }
});

//forget password

exports.forgetPassword = asyncErrorhandler(async (req, res, next) => {
  const { email } = req.body;
  const findUser = await userModel.findOne({ email });
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
      email: findUser.email,
      subject: "password change request received",
      message: message,
    });
  } catch (err) {
    findUser.passwordResetToken = undefined;
    findUser.passwordResetTokenExpired = undefined;
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
    passwordResetToken: token,
    passwordResetTokenExpired: { $gt: Date.now() },
  });

  if (!update) {
    const err = new customError("tokens is invalid or has expired", 400);
    return next(err);
  }
  update.password = req.body.password;
  update.passwordResetToken = undefined;
  update.passwordResetTokenExpired = undefined;
  update.passwordChangedAt = Date.now();
  await update.save();

  const jwttoken = generateToken(update._id);

  res.status(200).json({ status: "success", jwttoken });
});

exports.updatePassword = asyncErrorhandler(async (req, res, next) => {
  //  Get Current User Data From DataBase
  const user = userModel.findById(req.user._id).select("+password");

  // check if the password

  if (
    !(await user.comparePasswordInDb(req.body.currentPassword, user.password))
  ) {
    return next(
      new customError("The current password you provided is wrong", 401)
    );
  }

  user.password = req.body.password;
  user.confirmPassword = req.body.confirmPassword;
  await user.save();

  // Login User & Send Jwt
  const token = generateToken(user._id);

  res.status(200).json({ status: "success", token, data: { user } });
});
