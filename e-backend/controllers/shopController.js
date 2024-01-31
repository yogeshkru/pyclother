const shopModel = require("../model/shopModel");
const CustomError = require("../utils/customError");
const { sendShopToken } = require("../utils/jwtToken");
const sendEmail = require("../utils/sendMail")
const crypto = require("crypto");
class Shop {
  //Post
  async shopCreate(req, res, next) {
    try {
      const shopAlready = await shopModel.findOne({
        shop_email: req.body.shop_email,
      });
      if (shopAlready) {
        return next(new CustomError("Shop email is already exists", 409));
      }
      let shopes = await shopModel.create(req.body);
      // shopes.shop_password=undefined

      //   res.status(200).json({shopes})
      shopes = {
        _id: shopes._id,
        shop_name: shopes.shop_name,
        shop_email: shopes.shop_email,
        shop_phone: shopes.shop_phone,
        shop_avatar: shopes.shop_avatar,
        shop_zipcode: shopes.shop_zipcode,
        shop_role: shopes.shop_role,
      };

      return await sendShopToken(shopes, 201, res);
    } catch (err) {
      return next(new CustomError(err.message, 409));
    }
  }

  async updatePasswordByLogin(req, res, next) {
    let user = await shopModel.findById(req.user._id).select("+shop_password");

    if (
      !(await user.comparePasswordInDb(
        req.body.currentPassword,
        user.shop_password
      ))
    ) {
      return next(
        new CustomError("The currrent password you provided is wrong", 401)
      );
    }

    user.shop_password = req.body.password;
    await user.save();

    user = {
      _id: user._id,
      name: user.shop_name,
      email: user.shop_email,
    };

    return await sendShopToken(user, 201, res);
  }

  fetchAllShop = async function (req, res) {
    const allShop = await shopModel.find();
    res.status(200).json({ message: "success", allShop });
  };

  blockUser = async (req, res) => {
    const { id } = req.params;

    try {
      await shopModel.findByIdAndUpdate(
        id,
        { shop_active: false },
        { runValidators: true, new: true }
      );

      res.status(200).json({ message: "User Blocked" });
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  };

  unblockUser = async function (req, res) {
    const { id } = req.params;

    try {
      await shopModel.findByIdAndUpdate(
        id,
        { shop_active: true },
        { runValidators: true, new: true }
      );

      res.status(200).json({ message: "User Unblocked" });
    } catch (error) { }
  };

  async deleteMe(req, res, next) {
    await shopModel.findByIdAndUpdate(
      req.user._id,
      { shop_active: true },
      { runValidators: true, new: true }
    );
    res.status(200).json({ message: "Your account successfully deleted" });
  }

  // ***********************

  filterReqObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach((prop) => {
      if (allowedFields.includes(prop)) {
        newObj[prop] = obj[prop];
      }
    });
    return newObj;
  };

  async updateMe(req, res, next) {
    if (req.body.shop_password) {
      return next(
        new CustomError("You cannot update your password using this endpoint ")
      );
    }

    const filterObj = filterReqObj(
      req.body,
      "shop_name",
      "admin_email",
      "admin_phone"
    );

    const updateShop = await shopModel.findByIdAndUpdate(
      req.user._id,
      filterObj,
      { runValidators: true, new: true }
    );

    res.status(200).json({ message: "Shop Profile Updated", updateShop });
  }

  // **************************

  getUserById = async (req, res, next) => {
    const { id } = req.params;
    const user = await shopModel.findById(id);
    if (!user) {
      const error = new CustomError("user with that Id is not found", 404);
      return next(error);
    }
    res.status(200).json({ message: "success", data: { user } });
  };

  async getUserDelete(req, res, next) {
    const { id } = req.params;
    const user = await shopModel.findByIdAndDelete(id);

    if (!user) {
      const error = new CustomError("User with Id is not found", 404);
      return next(error);
    }
    res.status(200).json({ status: "Deleted" });
  }

  shoplogout = async (req, res, next) => {
    const { shop_user } = req.cookies;
    if (!shop_user) {
      const error = new CustomError("No token is cookies");
      return next(error);
    }

    const options = {
      maxAge: 0,
      httpOnly: true,
    };

    res.cookie("shop_user", null, options);

    res.status(200).json({ message: "Logout" });
  };



  //login
  async shopLogin(req, res, next) {
    try {
      const { shop_email, shop_password } = req.body;
      if (!shop_email || !shop_password) {
        const error = new CustomError(
          "Please provide email & password for login",
          400
        );
        return next(error);
      }
      let user = await shopModel
        .findOne({ shop_email })
        .select("+shop_password");
      if (!user) {
        const error = new CustomError("User is not found", 404);
        return next(error);
      }

      const isMatch = await user.comparePasswordInDb(
        shop_password,
        user.shop_password
      );
      if (!isMatch) {
        const error = new CustomError("Inncorrect password ", 400);
        next(error);
      }
      user = {
        _id: user._id,
        name: user.shop_name,
        email: user.shop_password,
      };
      sendShopToken(user, 200, res);
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  }

  //Forget Password
  async shopForget(req, res, next) {
    const { shop_email } = req.body;
    try {
      const findShop = await shopModel.findOne({ shop_email });

      if (!findShop) {
        return next(
          new CustomError(`We can't find the given ${shop_email} on the server`, 404)
        );
      }

      const resetToken = await findShop.createResetPasswordToken();
      await findShop.save({ validateBeforeSave: false });

      const resetUrl = `${req.protocol}://${req.get(
        "host"
      )}/api/shop/patch-shop/${resetToken}`;
      const message = `We have received a password reset request. Please use the link below to reset your password: \n\n ${resetUrl} \n\n This link is valid for 10 minutes.`;

      try {
        await sendEmail({
          email: findShop.shop_email,
          subject: "Password Change Request Received",
          message: message,
        });

        res.status(200).json({
          message: `Password reset token sent to your email.`,
        });

      } catch (error) {
        return next(new CustomError(error.message, 500))
      }



    } catch (error) {
      findShop.shop_passwordResetToken = undefined;
      findShop.shop_passwordResetToken = undefined;
      findShop.save({ validateBeforeSave: false });

      return next(new CustomError(error.message, 500));
    }
  }

  //resetpassword

  async shopResetPassword(req, res, next) {
    try {
      const token = crypto.createHash("sha256")
        .update(req.params.token)
        .digest("hex");

      const updateShop = await shopModel.findOne({
        shop_passwordResetToken: token,
        shop_passwordResetTokenExpired: { $gt: Date.now() }

      })
      if (!updateShop) {
        const err = new CustomError("token is invalid or expired", 400);
        return next(err);
      }

      updateShop.shop_password = req.body.password;
      updateShop.shop_passwordResetToken = undefined;
      updateShop.shop_passwordResetTokenExpired = undefined;
      updateShop.shop_passwordChangedAt = Date.now();
      await updateShop.save();

      sendShopToken(updateShop, 201, res);
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  }
}

module.exports = Shop;