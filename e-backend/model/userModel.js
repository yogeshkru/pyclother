const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const userSchema = new mongoose.Schema(
  {
    user_name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    user_email: {
      type: String,
      required: [true, "Email is required"],
    },
    user_phone: {
      type: Number,
      required: [true, "Phone is required"],
    },
    user_password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    user_wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpired: Date,
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 14);
});
userSchema.methods.comparePasswordInDb = async function (pwd, pswDB) {
  return await bcrypt.compare(pwd, pswDB);
};

userSchema.methods.isPasswordChange = async function (jwttoken) {
  if (this.passwordChangedAt) {
    const passwordChangedtimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return jwttoken < passwordChangedtimestamp;
  } else {
    return false;
  }
};

userSchema.methods.createResetPasswordToken = async function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetTokenExpired = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
module.exports = mongoose.model("tbl_User", userSchema);
