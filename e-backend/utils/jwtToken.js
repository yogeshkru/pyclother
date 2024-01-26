const jwt = require("jsonwebtoken");
// *******************************************************
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.SECERT_STRING, {
    expiresIn: process.env.EXPIRE_DAYS,
  });
};

const ShopToken = function (id, boolean) {
  this.shopAdmin = boolean;
  this.id = id;
};

const generateShopToken = function (id, boolean) {
  const tokenCreateObject = new ShopToken(id, boolean);

  // let tokenObject = JSON.stringify(tokenObjectCreation);
  // const  tokenParse= JSON.parse(tokenObject);
  return jwt.sign({ tokenCreateObject }, process.env.SECERT_STRING, {
    expiresIn: process.env.EXPIRE_DAYS,
  });
};
// ********************************************************************

const sendUserToken = async (user, statusCode, res, message) => {
  const token = generateToken(user._id);
  const options = {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.cookie("user", token, options);
  // user.password = undefined;

  res.status(statusCode).json({ status: true, token, data: { user }, message });
};

const sendShopToken = async (user, statusCode, res) => {
  const token = generateShopToken(user._id, true);

  const options = {
    maxAge: 30 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") {
    options.secure = true;
  }

  res.cookie("shop", token, options);

  res.status(statusCode).json({ status: "success", token, data: { user } });
};

module.exports = { sendUserToken, sendShopToken };
