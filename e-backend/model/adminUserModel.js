const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

const adminUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: Number,
      required: [true, "Phone is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    },
    role: {
      type: String,
      enum: ["admin", "super admin"],
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
    avatar: String,
    companyid: String,
    branchid: String,

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetTokenExpired: Date,
  },
  {
    timestamps: true,
  }
);

// adminUserSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) return next();
//   this.password = await bcrypt.hash(this.password, 14);
//   next();
// });

// adminUserSchema.pre(/^find/, function (next) {
//   // this only find the user that who are all in active  like which to be true
//   // this.find({ active: true });

//   // the below concept get the user's that who are all not equal to false

//   this.find({active:{$ne:false}})

//   next();
// });

adminUserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 14);
  next();
});

adminUserSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

adminUserSchema.methods.comparePasswordDb = async function (pswd, pswdDB) {
  return await bcrypt.compare(pswd, pswdDB);
};

adminUserSchema.methods.isPasswordInDb = async function (jwtToken) {
  if (this.passwordChangedAt) {
    const pswdChangedTimeStamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return jwtToken < pswdChangedTimeStamp;
  } else {
    return false;
  }
};

adminUserSchema.method.createResetPasswordToken = async function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetTokenExpired = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
module.exports = mongoose.model("Admins", adminUserSchema);
