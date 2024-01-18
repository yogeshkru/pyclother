const asyncErrorhandler = require("../utils/asyncErrorhandler");
const customError = require("../utils/customError");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");
const util = require("util");

const userProtect = asyncErrorhandler(async (req, res, next) => {
  const testToken = req.headers.authorization;
  let token;
  if (testToken && testToken.startsWith("Bearer")) {
    token = testToken.split(" ")[1];
  }
  if (!token) {
    const error = new customError("you are not logged in", 401);
    return next(error);
  }
  const ducoderToken = await util.promisify(jwt.verify)(
    token,
    process.env.SECERT_STRING
  );
  const users = await userModel.findById(ducoderToken.id);

  if (!users) {
    const err = new customError(`the user with give token does not exist`, 401);
    return next(err);
  }

  if(await users.isPasswordChange(ducoderToken.iat)){
   const error=new customError(
    `the password has been change recently. please login again`,401
   )

   return next(error)
  }
  req.user=users

  next()
});


module.exports={userProtect}