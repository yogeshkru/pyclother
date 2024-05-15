// const adminUserModel = require("../model/adminUserModel");
// const jwt = require("jsonwebtoken");
// const asyncErrorhandler = require("../utils/asyncErrorhandler");
// const CustomError = require("../utils/customError");
// const crypto = require("crypto");
// const util = require("util");
// const sendEmail = require("../utils/sendMail");
// const { sendAdminToken } = require("../utils/jwtToken");

// const createActivationToken = (data) => {
//   return jwt.sign({ data }, process.env.ACITIVATE_SECERT);
// };

// exports.createNewUser = asyncErrorhandler(async (req, res, next) => {
//   try {
//     const {
//       admin_name,
//       admin_email,
//       admin_phone,
//       admin_password,
//       admin_role,
//       admin_companyid,
//       admin_branchid,
//     } = req.body;

//     const userEmail = await adminUserModel.findOne({ admin_email });

//     if (userEmail) {
//       return next(new CustomError("User already exist", 400));
//     }

//     const user = {
//       admin_name: admin_name,
//       admin_email: admin_email,
//       admin_phone: admin_phone,
//       admin_password: admin_password,
//       admin_role: admin_role,
//       admin_companyid: admin_companyid,
//       admin_branchid: admin_branchid,
//     };
//     const token = createActivationToken(user);

//     const activevationUrl = `http://localhost:5173/admin-activation/${token}`;

//     try {
//       await sendEmail({
//         email: user.admin_email,
//         subject: "Activate your account",
//         message: `Hello ${user.admin_name}. please click on the link to activate your account:${activevationUrl}`,
//       });

//       return res.status(200).json({
//         success: true,
//         message: `Please check your email ${user.admin_email} to activate your account`,
//       });
//     } catch (error) {
//       return next(new CustomError(error.message, 500));
//     }
//   } catch (error) {
//     return next(new CustomError(error.message, 404));
//   }
// });

// exports.activation = asyncErrorhandler(async (req, res, next) => {
//   try {
//     const { activation_token } = req.params;

//     const newUser = await util.promisify(jwt.verify)(
//       activation_token,
//       process.env.ACITIVATE_SECERT
//     );

//     if (!newUser) {
//       return next(new CustomError("Invalid token", 400));
//     }

//     const {
//       admin_name,
//       admin_email,
//       admin_phone,
//       admin_password,
//       admin_role,
//       admin_companyid,
//       admin_branchid,
//     } = newUser?.data;

//     let user = await adminUserModel.findOne({ admin_email });

//     if (user) {
//       return next(new CustomError("User already exist", 400));
//     }

//     user = await adminUserModel.create({
//       admin_name,
//       admin_email,
//       admin_phone,
//       admin_password,
//       admin_role,
//       admin_companyid,
//       admin_branchid,
//     });

//     const data = {
//       _id: user._id,
//       name: user.admin_name,
//       email: user.admin_email,
//       companyid: user.admin_companyid,
//       branchid: user.admin_branchid,
//     };

//     return await sendAdminToken(data, 201, res);
//   } catch (error) {
//     return next(new CustomError(error.message, 500));
//   }
// });

// exports.login = asyncErrorhandler(async (req, res, next) => {
//   try {
//     const { admin_email, admin_password } = req.body;
//     if (!admin_email || !admin_password) {
//       return next(
//         new CustomError("Please provide email & password for login", 400)
//       );
//     }

//     const user = await adminUserModel
//       .findOne({ admin_email })
//       .select("+admin_password");

//     const isMatch = await user.comparePasswordDb(
//       admin_password,
//       user.admin_password
//     );

//     if (!user || !isMatch) {
//       const error = new CustomError("Incorrect email or password", 400);
//       return next(error);
//     }

//     const data = {
//       _id: user._id,
//       name: user.admin_avatar,
//       email: user.admin_email,
//     };

//     return await sendAdminToken(data, 200, res);
//   } catch (error) {
//     return next(new CustomError("User doesn't exists", 400));
//   }
// });

// exports.updatePassword = asyncErrorhandler(async (req, res, next) => {
//   const user = adminUserModel.findById(req.user._id).select("+admin_password");

//   if (
//     !(await user.comparePasswordInDb(
//       req.body.currentPassword,
//       user.admin_password
//     ))
//   ) {
//     return next(
//       new CustomError("The current password you provided is wrong", 401)
//     );
//   }
//   user.admin_password = req.body.admin_password;
//   await user.save();

//   return await sendAdminToken(user, 200, res);
// });

// // *************************************************************************

// const filterReqObj = (obj, ...allwedFields) => {
//   const newObj = {};
//   Object.keys(obj).forEach((prop) => {
//     if (allwedFields.includes(prop)) newObj[prop] = obj[prop];
//   });

//   return newObj;
// };

// exports.updateMe = asyncErrorhandler(async (req, res, next) => {
//   if (req.body.admin_password) {
//     return next(
//       new CustomError(
//         "You cannot update your password using this endpoint",
//         400
//       )
//     );
//   }

//   const filterObj = filterReqObj(
//     req.body,
//     "admin_name",
//     "admin_email",
//     "admin_phone"
//   );

//   const updateUser = await adminUserModel.findByIdAndUpdate(
//     req.user._id,
//     filterObj,
//     { runValidators: true, new: true }
//   );

//   res.status(200).json({ status: "UserProfileUpdated", updateUser });
// });

// // *********************************************************************

// exports.deleteMe = asyncErrorhandler(async (req, res) => {
//   await adminUserModel.findByIdAndUpdate(
//     req.user._id,
//     { admin_active: false },
//     { runValidators: true, new: true }
//   );
// });

// exports.forgotPassword = asyncErrorhandler(async (req, res, next) => {
//   const { admin_email } = req.body;

//   const findUser = await adminUserModel.findOne({ admin_email });

//   if (!findUser) {
//     return next(
//       new CustomError("we could not find the user email with given email")
//     );
//   }

//   const resetToken = await adminUserModel.createResetPasswordToken();
//   await findUser.save({ validateBeforeSave: false });
//   const resetUrl = `${req.protocol}://${req.get(
//     "host"
//   )}/user/resetpassword/${resetToken}`;

//   const message = `we have received a password reset request. please use below link to reset your password\n\n${resetUrl}\n\n this link valid for 10 minutes`;

//   try {
//     await sendEmail({
//       email: findUser.admin_email,
//       subject: "password change request received",
//       message: message,
//     });
//     res
//       .status(200)
//       .json({ message: `password reset link send to the user email ${findUser.admin_email}`});
//   } catch (error) {
//     findUser.admin_passwordResetToken = undefined;
//     findUser.admin_passwordResetTokenExpired = undefined;
//     findUser.save({ validateBeforeSave: false });
//     return next(
//       new CustomError("there was an error sending password reset email", 500)
//     );
//   }
// });

// exports.resetPassword = asyncErrorhandler(async (req, res, next) => {
//   const token = crypto
//     .createHash("sha256")
//     .update(req.params.token)
//     .digest("hex");

//   const update = await adminUserModel.findOne({
//     admin_passwordResetToken: token,
//     admin_passwordResetTokenExpired: { $gt: Date.now() },
//   });

//   if (!update) {
//     const error = new CustomError("token is invalid or has expired !", 400);
//     return next(error);
//   }
//   update.admin_password = req.body.admin_password;
//   update.admin_passwordResetToken = undefined;
//   update.admin_passwordResetTokenExpired = undefined;
//   update.admin_passwordChangedAt = Date.now();
//   update.save();

//   return await sendAdminToken(update._id, 200, res);
// });

// exports.getUserById = asyncErrorhandler(async (req, res, next) => {
//   const { id } = req.params;

//   const user = await adminUserModel.findById(id);

//   if (!user) {
//     const error = new CustomError("User with that ID is not found", 404);
//     return next(error);
//   }

//   res.status(200).json({ status: "success", data: { user } });
// });

// exports.fetchAllUser = asyncErrorhandler(async (req, res) => {
//   const AllUsers = await adminUserModel.find();
//   res.status(200).json({ status: "success", AllUsers });
// });

// exports.blockUser = asyncErrorhandler(async function (req, res, next) {
//   // admin_user_id
//   const { id } = req.params;

//   try {
//     const block = await adminUserModel.findByIdAndUpdate(
//       id,
//       { admin_active: false },
//       { runValidators: true, new: true }
//     );

//     res.status(200).json({ blocked: "userblocked", block });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

// exports.unblockUser = asyncErrorhandler(async (req, res, next) => {
//   const { id } = req.params;

//   try {
//     const unblock = await adminUserModel.findByIdAndUpdate(
//       id,
//       { admin_active: true },
//       { runValidators: true, new: true }
//     );
//     res.status(200).json({ unblocked: "userUnblocked", unblock });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

// exports.logout = asyncErrorHanlder(async (req, res, next) => {
//   const cookie = req.cookies;
//   if (!cookie?.refreshToken) {
//     const error = new CustomError("No Refresh Token in Cookies");
//     return next(error);
//   }
//   const refreshToken = cookie.refreshToken;
//   const user = await userModel.findOne({ refreshToken });
//   if (!user) {
//     res.clearCookie("refreshToken", { httpOnly: true, secure: true });
//     return res.status(204).send();
//   }

//   await userModel.findOneAndUpdate(
//     { refreshToken },
//     {
//       refreshToken: "",
//     }
//   );
//   res.clearCookie("refreshToken", { httpOnly: true, secure: true });

//   return res.status(204).send();
// });

// exports.logout = asyncErrorhandler(async (req, res, next) => {
//   const { shop_user } = req.cookies;

//   if (!shop_user) {
//     const error = new CustomError("No  token in cookies");
//     return next(error);
//   }

//   const options = {
//     maxAge: 0,
//     httpOnly: true,
//   };

//   res.cookie("shop_user", null, options);
//   res.status(200).json({ status: "success", message: "Logout successful" });
// });

const adminUserModel = require("../model/adminUserModel");
const jwt = require("jsonwebtoken");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const CustomError = require("../utils/customError");
const crypto = require("crypto");
const util = require("util");
const sendEmail = require("../utils/sendMail");
const { adminToken } = require("../utils/jwtToken");

class AdminUserController {
  createActivationToken(data) {
    return jwt.sign({ data }, process.env.ACITIVATE_SECERT);
  }

  async createNewUser(req, res, next) {
    try {
      const {
        admin_name,
        admin_email,
        admin_phone,
        admin_password,
        admin_role,
        admin_companyid,
        admin_branchid,
      } = req.body;

      const userEmail = await adminUserModel.findOne({ admin_email });

      if (userEmail) {
        return next(new CustomError("User already exists", 400));
      }

      const user = {
        admin_name: admin_name,
        admin_email: admin_email,
        admin_phone: admin_phone,
        admin_password: admin_password,
        admin_role: admin_role,
        admin_companyid: admin_companyid,
        admin_branchid: admin_branchid,
      };
      const token = this.createActivationToken(user);

      const activevationUrl = `http://localhost:5173/admin-activation/${token}`;

      try {
        await sendEmail({
          email: user.admin_email,
          subject: "Activate your account",
          message: `Hello ${user.admin_name}. please click on the link to activate your account:${activevationUrl}`,
        });

        return res.status(200).json({
          success: true,
          message: `Please check your email ${user.admin_email} to activate your account`,
        });
      } catch (error) {
        return next(new CustomError(error.message, 500));
      }
    } catch (error) {
      return next(new CustomError(error.message, 404));
    }
  }

  async activation(req, res, next) {
    try {
      const { activation_token } = req.params;

      const newUser = await util.promisify(jwt.verify)(
        activation_token,
        process.env.ACITIVATE_SECERT
      );

      if (!newUser) {
        return next(new CustomError("Invalid token", 400));
      }

      const {
        admin_name,
        admin_email,
        admin_phone,
        admin_password,
        admin_role,
        admin_companyid,
        admin_branchid,
      } = newUser?.data;

      let user = await adminUserModel.findOne({ admin_email });

      if (user) {
        return next(new CustomError("User already exists", 400));
      }

      user = await adminUserModel.create({
        admin_name,
        admin_email,
        admin_phone,
        admin_password,
        admin_role,
        admin_companyid,
        admin_branchid,
      });

      const data = {
        _id: user._id,
        name: user.admin_name,
        email: user.admin_email,
        companyid: user.admin_companyid,
        branchid: user.admin_branchid,
      };

      return await adminToken(data, 201, res);
    } catch (error) {
      return next(new CustomError(error.message, 500));
    }
  }

  async logout(req, res, next) {
    const { shop_user } = req.cookies;

    if (!shop_user) {
      const error = new CustomError("No token in cookies");
      return next(error);
    }

    const options = {
      maxAge: 0,
      httpOnly: true,
    };

    res.cookie("shop_user", null, options);
    res.status(200).json({ status: "success", message: "Logout successful" });
  }

  login = async (req, res, next) => {
    try {
      const { admin_email, admin_password } = req.body;
      if (!admin_email || !admin_password) {
        return next(
          new CustomError("Please provide email & password for login", 400)
        );
      }

      const user = await adminUserModel
        .findOne({ admin_email })
        .select("+admin_password");

      const isMatch = await user.comparePasswordDb(
        admin_password,
        user.admin_password
      );

      if (!user || !isMatch) {
        const error = new CustomError("Incorrect email or password", 400);
        return next(error);
      }

      const data = {
        _id: user._id,
        name: user.admin_avatar,
        email: user.admin_email,
      };

      return await adminToken(data, 200, res);
    } catch (error) {
      return next(new CustomError("User doesn't exists", 400));
    }
  };

  updatePassword = async (req, res, next) => {
    const user = adminUserModel
      .findById(req.user._id)
      .select("+admin_password");

    if (
      !(await user.comparePasswordInDb(
        req.body.currentPassword,
        user.admin_password
      ))
    ) {
      return next(
        new CustomError("The current password you provided is wrong", 401)
      );
    }
    user.admin_password = req.body.admin_password;
    await user.save();

    return await adminToken(user, 200, res);
  };
  // *******************************************

  filterReqObj = (obj, ...allwedFields) => {
    const newObj = {};
    Object.keys(obj).forEach((prop) => {
      if (allwedFields.includes(prop)) newObj[prop] = obj[prop];
    });

    return newObj;
  };
  updateMe = async (req, res, next) => {
    if (req.body.admin_password) {
      return next(
        new CustomError(
          "You cannot update your password using this endpoint",
          400
        )
      );
    }

    const filterObj = filterReqObj(
      req.body,
      "admin_name",
      "admin_email",
      "admin_phone"
    );

    const updateUser = await adminUserModel.findByIdAndUpdate(
      req.user._id,
      filterObj,
      { runValidators: true, new: true }
    );

    res.status(200).json({ status: "UserProfileUpdated", updateUser });
  };

  deleteMe = async (req, res) => {
    await adminUserModel.findByIdAndUpdate(
      req.user._id,
      { admin_active: false },
      { runValidators: true, new: true }
    );
  };
  forgotPassword = async (req, res, next) => {
    const { admin_email } = req.body;

    const findUser = await adminUserModel.findOne({ admin_email });

    if (!findUser) {
      return next(
        new CustomError("we could not find the user email with given email")
      );
    }

    const resetToken = await adminUserModel.createResetPasswordToken();
    await findUser.save({ validateBeforeSave: false });
    const resetUrl = `${req.protocol}://${req.get(
      "host"
    )}/user/resetpassword/${resetToken}`;

    const message = `we have received a password reset request. please use below link to reset your password\n\n${resetUrl}\n\n this link valid for 10 minutes`;

    try {
      await sendEmail({
        email: findUser.admin_email,
        subject: "password change request received",
        message: message,
      });
      res.status(200).json({
        message: `password reset link send to the user email ${findUser.admin_email}`,
      });
    } catch (error) {
      findUser.admin_passwordResetToken = undefined;
      findUser.admin_passwordResetTokenExpired = undefined;
      findUser.save({ validateBeforeSave: false });
      return next(
        new CustomError("there was an error sending password reset email", 500)
      );
    }
  };

  resetPassword = async (req, res, next) => {
    const token = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const update = await adminUserModel.findOne({
      admin_passwordResetToken: token,
      admin_passwordResetTokenExpired: { $gt: Date.now() },
    });

    if (!update) {
      const error = new CustomError("token is invalid or has expired !", 400);
      return next(error);
    }
    update.admin_password = req.body.admin_password;
    update.admin_passwordResetToken = undefined;
    update.admin_passwordResetTokenExpired = undefined;
    update.admin_passwordChangedAt = Date.now();
    update.save();

    return await adminToken(update, 200, res);
  };

  getUserById = async (req, res, next) => {
    const { id } = req.params;

    const user = await adminUserModel.findById(id);

    if (!user) {
      const error = new CustomError("User with that ID is not found", 404);
      return next(error);
    }

    res.status(200).json({ status: "success", data: { user } });
  };

  fetchAllUser = asyncErrorhandler(async (req, res) => {
    const AllUsers = await adminUserModel
      .find()
      .sort("-createdAt")
      .select("-__v");
    res.status(200).json({ status: "success", AllUsers });
  });

  blockUser = async function (req, res, next) {
    // admin_user_id
    const { id } = req.params;

    try {
      const block = await adminUserModel.findByIdAndUpdate(
        id,
        { admin_active: false },
        { runValidators: true, new: true }
      );

      res.status(200).json({ blocked: "userblocked", block });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  unblockUser = async (req, res, next) => {
    const { id } = req.params;

    try {
      const unblock = await adminUserModel.findByIdAndUpdate(
        id,
        { admin_active: true },
        { runValidators: true, new: true }
      );
      res.status(200).json({ unblocked: "userUnblocked", unblock });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };
  logout = async (req, res, next) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) {
      const error = new CustomError("No Refresh Token in Cookies");
      return next(error);
    }
    const refreshToken = cookie.refreshToken;
    const user = await userModel.findOne({ refreshToken });
    if (!user) {
      res.clearCookie("refreshToken", { httpOnly: true, secure: true });
      return res.status(204).send();
    }

    await userModel.findOneAndUpdate(
      { refreshToken },
      {
        refreshToken: "",
      }
    );
    res.clearCookie("refreshToken", { httpOnly: true, secure: true });

    return res.status(204).send();
  };
}

module.exports = AdminUserController;
