const adminUserModel = require("../model/adminUserModel");
const jwt = require("jsonwebtoken");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const CustomError = require("../utils/customError");
const crypto = require("crypto");
const util = require("util");
const sendEmail = require("../utils/sendMail");
const sendToken = require("../utils/jwtToken");

const createActivationToken = (data) => {
  return jwt.sign({ data }, process.env.ACITIVATE_SECERT, { expiresIn: "5m" });
};

const createSendResponse = function (user, statusCode, res) {
  const token = generateToken(user._id);

  const options = {
    maxAge: process.env.EXPIRE_DAYS,
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "PRODUCTION") {
    options.secure = true;
  }

  res.cookie("jwt", token, options);

  // user.password = undefined; ===> IMPORTANT
  res.status(statusCode).json({ status: "success", token, data: { user } });
};

exports.createNewUser = asyncErrorhandler(async (req, res, next) => {
  try {
    const { name, email, phone, password, role, companyid, branchid } =
      req.body;

    const userEmail = await adminUserModel.findOne({ email });

    if (userEmail) {
      return next(new CustomError("User already exist", 400));
    }

    const user = {
      name: name,
      email: email,
      phone: phone,
      password: password,
      role: role,
      companyid: companyid,
      branchid: branchid,
    };

    const token = createActivationToken(user);

    const activevationUrl = `http://localhost:5173/admin-activation/${token}`;

    try {
      await sendEmail({
        email: user.email,
        subject: "Activate your account",
        message: `Hello ${user.name}. please click on the link to activate your account:${activevationUrl}`,
      });

      return res.status(200).json({
        success: true,
        message: `Please check your email ${user.email} to activate your account`,
      });
    } catch (error) {
      return next(new CustomError(error.message, 500));
    }
  } catch (error) {
    return next(new CustomError(error.message, 404));
  }
});

exports.activation = asyncErrorhandler(async (req, res, next) => {
  try {
    const { activation_token } = req.body;

    const newUser = await util.promisify(jwt.verify)(
      activation_token,
      process.env.ACITIVATE_SECERT
    );

    if (!newUser) {
      return next(new CustomError("Invalid token", 400));
    }

    const { name, email, password, phone, role, companyid, branchid } =
      newUser?.data;

    let user = await adminUserModel.finOne({ email });

    if (user) {
      return next(new CustomError("User already exist", 400));
    }

    user = await create({
      name,
      email,
      password,
      phone,
      role,
      companyid,
      branchid,
    });

    const data = {
      _id: user._id,
      name: user.name,
      email: user.email,
      companyid: user.companyid,
      branchid: user.branchid,
    };

    return await sendToken(data, 201, res);
  } catch (error) {
    return next(new CustomError(error.message, 500));
  }
});

exports.updatePassword = asyncErrorhandler(async (req, res, next) => {
  const user = adminUserModel.findById(req.user._id).select("+password");

  if (
    !(await user.comparePasswordInDb(req.body.currentPassword, user.password))
  ) {
    return next(
      new CustomError("The current password you provided is wrong", 401)
    );
  }
  user.password = req.body.password;
  await user.save();

  return await sendToken(user, 200, user);
});

// *************************************************************************

const filterReqObj = (obj, ...allwedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((prop) => {
    if (allwedFields.includes(prop)) newObj[prop] = obj[prop];
  });

  return newObj;
};

exports.updateMe = asyncErrorhandler(async (req, res, next) => {
  if (req.body.password) {
    return next(
      new CustomError(
        "You cannot update your password using this endpoint",
        400
      )
    );
  }

  const filterObj = filterReqObj(req.body, "name", "email", "phone");

  const updateUser = await adminUserModel.findByIdAndUpdate(
    req.user._id,
    filterObj,
    { runValidators: true, new: true }
  );

  res.status(200).json({ status: "UserProfileUpdated", updateUser });
});

// *********************************************************************

exports.deleteMe = asyncErrorhandler(async (req, res, next) => {
  await adminUserModel.findByIdAndUpdate(req.user._id, { active: false });
});
