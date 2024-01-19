const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECERT_STRING, {
    expiresIn: process.env.EXPIRE_DAYS,
  });
};

const sendToken = async (user, statusCode, res) => {
  const token = generateToken(user._id);

  const options = {
    maxAge: process.env.EXPIRE_DAYS,
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "PRODUCTION") {
    options.secure = true;
  }

  res.cookie("user", token, options);

  user.password = undefined;

  res.status(statusCode).json({ status: "success", token, data: { user } });
};

module.exports = sendToken;
