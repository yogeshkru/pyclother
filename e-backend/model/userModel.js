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
    user_active: {
      type: Boolean,
      default: true,
      select: false,
    },
    user_role: {
      type: String,
      enum: ["user", "superadmin"],
      default: "user",
    },
    user_wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
    user_passwordChangedAt: Date,
    user_passwordResetToken: String,
    user_passwordResetTokenExpired: Date,
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("user_password")) return next();
  this.user_password = await bcrypt.hash(this.user_password, 14);
});
userSchema.methods.comparePasswordInDb = async function (pwd, pswDB) {
  return await bcrypt.compare(pwd, pswDB);
};

userSchema.methods.isPasswordChange = async function (jwttoken) {
  if (this.user_passwordChangedAt) {
    const passwordChangedtimestamp = parseInt(
      this.user_passwordChangedAt.getTime() / 1000,
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
module.exports = mongoose.model("Tbl_user", userSchema);
