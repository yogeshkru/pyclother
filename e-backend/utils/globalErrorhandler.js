const CustomError = require("./customError");

const devError = (res, error) => {
  res.status(error.statuscode).json({
    status: error.statuscode,
    message: error.message,
    stackTrace: error.stack,
    error: error,
  });
};

const prodError = (res, err) => {
  if (err.isOperational) {
    return res.status(err.statuscode).json({
      status: err.statuscode,
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "Something went wrong! Please try again later.",
    });
  }
};

// ******************************************************************************************

const castErrorHandler = (err) => {
  const msg = `Invalid value for ${err.path}: ${err.value}`;

  return new CustomError(msg, 400);
};

const duplicateKerHandler = function (err) {
  const message = `Dulipcate key ${Object.keys(err.message)} Entered`;

  return new CustomError(message, 200);
};

const validationErrorHandler = (err) => {
  const error = Object.values(err.errors).map((val) => val.message);
  const errorMessages = error.join(". ");
  const msg = `Invalid input data: ${errorMessages}`;
  return new CustomError(msg, 200);
};
// *****************************************************************************************



// *******************************Global Error Handling*************************************
module.exports = (error, req, res, next) => {
  error.statuscode = error.statuscode || 500;
  error.message = error.message || "Internal server error";

  if (process.env.NODE_ENV === "development") {
    return devError(res, error);
  } else if (process.env.NODE_ENV === "production") {
    // let err = { ...error };
    if (error.name === "CastError") error = castErrorHandler(error);
    if (error.code === 11000) error = duplicateKerHandler(error);
    if (error.name === "validationError") error = validationErrorHandler(error);
    return prodError(res, error);
  }

  res.status(error.statuscode).json({ success: false, message: error.message });
};
