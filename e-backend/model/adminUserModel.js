const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const adminUserSchema = new mongoose.Schema(
  {
    admin_name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    admin_email: {
      type: String,
      required: [true, "Email is required"],
    },
    admin_phone: {
      type: Number,
      required: [true, "Phone is required"],
    },
    admin_password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "employee","super admin"],
    },
    admin_active: {
      type: Boolean,
      default: true,
      select: false,
    },
    admin_avatar: String,
    admin_companyid: String,
    admin_branchid: String,

    admin_passwordChangedAt: Date,
    admin_passwordResetToken: String,
    admin_passwordResetTokenExpired: Date,
  },
  {
    timestamps: true,
  }
);

adminUserSchema.pre("save", async function (next) {
  if (!this.isModified("admin_password")) return next();
  this.admin_password = await bcrypt.hash(this.admin_password, 14);
  next();
});

adminUserSchema.pre(/^find/, function (next) {
  //   // this only find the user that who are all in active  like which to be true

  //   // this.find({ active: true });

  //   // the below concept get the user's that who are all not equal to false

  this.find({ admin_active: { $ne: false } });
  next();
});

adminUserSchema.methods.comparePasswordDb = async function (pswd, pswdDB) {
  return await bcrypt.compare(pswd, pswdDB);
};

adminUserSchema.methods.isPasswordInDb = async function (jwtToken) {
  if (this.admin_passwordChangedAt) {
    const pswdChangedTimeStamp = parseInt(
      this.admin_passwordChangedAt.getTime() / 1000,
      10
    );
    return jwtToken < pswdChangedTimeStamp;
  } else {
    return false;
  }
};

adminUserSchema.method.createResetPasswordToken = async function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.admin_passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.admin_passwordResetTokenExpired = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
module.exports = mongoose.model("Tbl_admins", adminUserSchema);
