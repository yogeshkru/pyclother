const asyncErrorhandler = require("../utils/asyncErrorhandler");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const shopModel = require("../model/shopModel");
const util = require("util");
const CustomError = require("../utils/customError");
const adminUserModel = require("../model/adminUserModel");

const userProtect = asyncErrorhandler(async (req, res, next) => {
  const testToken = req.headers.authorization;
  let token;
  if (testToken && testToken.startsWith("Bearer")) {
    token = testToken.split(" ")[1];
  }
  if (!token) {
    const error = new CustomError("you are not logged in", 401);
    return next(error);
  }
  const ducoderToken = await util.promisify(jwt.verify)(
    token,
    process.env.SECERT_STRING
  );
  const users = await userModel.findById(ducoderToken.id);

  if (!users) {
    const err = new CustomError(`the user with give token does not exist`, 401);
    return next(err);
  }

  if (await users.isPasswordChange(ducoderToken.iat)) {
    const error = new CustomError(
      `the password has been change recently. please login again`,
      401
    );

    return next(error);
  }
  req.user = users;

  next();
});

const shopProtect = asyncErrorhandler(async (req, res, next) => {
  const testToken = req.headers.authorization;
  let token;
  if (testToken && testToken.startsWith("Bearer")) {
    token = testToken.split(" ")[1];
  }
  if (!token) {
    const error = new CustomError("you are not logged in", 401);
    return next(error);
  }
  const decodedToken = await util.promisify(jwt.verify)(
    token,
    process.env.SECERT_STRING
  );

  let user;

  if (
    decodedToken.tokenCreateObject &&
    decodedToken.tokenCreateObject?.shopAdmin
  ) {
    user = await shopModel.findById(decodedToken.tokenCreateObject.id);
  } else {
    user = await userModel.findById(decodedToken.id);
  }
  if (!user) {
    const error = new CustomError(
      "The user with given token does not exist",
      401
    );
    return next(error);
  }
  if (await user.isPasswordChange(decodedToken.iat)) {
    const error = new CustomError(
      `The password has been change recently. please login again`,
      401
    );
    return next(error);
  }
  req.user = user;
  next();
});

let adminUser = asyncErrorhandler(async (req, res, next) => {
  const testToken = req.headers.authorization;

  let token;
  if (testToken && testToken.startsWith("Bearer")) {
    token = testToken.split(" ")[1];
  }
  if (!token) {
    const error = new CustomError("you are not logged in", 401);
    return next(error);
  }

  let decodedToken = await util.promisify(jwt.verify)(
    token,
    process.env.SECERT_STRING
  );

  const user = await adminUserModel.findById(decodedToken.id);
  if (!user) {
    const error = new CustomError(
      "The user with given token does not exist",
      401
    );
    return next(error);
  }

  req.user = user;
  next();
});
// const adminProtect = asyncErrorhandler(async (req, res, next) => {
//   const { shop_user } = req.cookies;

//   if (!shop_user) {
//     return next(new CustomError("you are not logged in", 401));
//   }

//   const decodedToken = await util.promisify(jwt.verify)(
//     shop_user,
//     process.env.SECERT_STRING
//   );

//   const users = await adminUserModel.findById(decodedToken.id);

//   if (!users) {
//     const error = new CustomError(
//       "The user with give token does not exist",
//       401
//     );

//     return next(error);
//   }

//   if (await users.isPasswordInDb(decodedToken.iat)) {
//     const error = new CustomError(
//       "the password has been change recently. please login again",
//       401
//     );
//     return next(error);
//   }

//   req.user = users;
//   next()
// });

// const protect = asyncErrorhandler(async (req, res, next) => {
//   const { user } = req.cookies;
//   if (!user) {
//     return next(new CustomError("yor are not logged in", 401));
//   }
//   const decodedToken = await util.promisify(jwt.verify)(
//     user,
//     process.env.SECERT_STRING
//   );

//   const users = await userModel.findById(decodedToken.id);

//   if (!users) {
//     const error = new CustomError("The user with given token does not exist");
//     return next(error);
//   }

//   if (await user.isPasswordInDb(decodedToken.iat)) {
//     const error = new CustomError(
//       "The password has been change recently. please login again",
//       401
//     );

//     return next(error);
//   }
//   res.user = users;
//   next()
// });

const restrict = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role)) {
      const error = new CustomError(
        "you don't have permission to perform this action",
        403
      );
      return next(error);
    }
    next();
  };
};

module.exports = { userProtect, shopProtect, adminUser, restrict };
