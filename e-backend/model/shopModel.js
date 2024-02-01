const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const shopSchema = new mongoose.Schema(
  {
    shop_name: {
      type: String,
      required: [true, "Name is required"],
    },
    shop_email: {
      type: String,
      unique: true,

      required: [true, "Email is required"],
    },
    shop_password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "password is min 8 character"],
      select: false,
    },
    shop_description: {
      type: String,
    },
    shop_address: {
      type: String,
      required: [true, "Address is required"],
    },
    shop_phone: {
      type: Number,
      unique: true,

      required: ["Phone number is required"],
    },
    shop_avatar: {
      type: String,
    },
    shop_zipcode: {
      type: String,
      required: [true, "Zipcode is required"],
    },
    role: {
      type: String,
      enum: ["shop admin","super admin"],
      default: "shop admin",
    },
    withDrawalMethod: {
      type: Object,
    },
    shop_active: {
      type: Boolean,
      default: true,
      select: false,
    },
    transaction: [
      {
        amount: {
          type: String,
        },
        status: {
          type: String,
          default: "Processing",
        },
        created_At: {
          type: Date,
          default: Date.now(),
        },
        updated_At: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    shop_passwordChangedAt: Date,
    shop_passwordResetToken: String,
    shop_passwordResetTokenExpired: Date,
  },
  {
    timestamps: true,
  }
);
shopSchema.pre("save", async function (next) {
  if (!this.isModified("shop_password")) return next();
  this.shop_password = await bcrypt.hash(this.shop_password, 14);
});
shopSchema.methods.comparePasswordInDb = async function (pwd, pswDB) {
  return await bcrypt.compare(pwd, pswDB);
};

shopSchema.methods.isPasswordChange = async function (jwttoken) {
  if (this.shop_password) {
    const passwordChangedtimeStamp = parseInt(
      this.shop_passwordChangedAt.getTime() / 1000,
      10
    );
    return jwttoken < passwordChangedtimeStamp;
  } else {
    return false;
  }
};
shopSchema.methods.createResetPasswordToken = async function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.shop_passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.shop_passwordResetTokenExpired = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
module.exports = mongoose.model("Tbl_shop", shopSchema);
