const customError = require("./customError");

// const devError = (res, err) => {
//   res.status(err.statuscode).json({
//     status: err.statuscode,
//     message: err.message,
//     stackTrace: err.message,
//     error: err,
//   });
// };

// const prodError = (res, err) => {
//   if (err.isOperational) {
//     res.status(error.statuscode).json({
//       status: err.statuscode,
//       message: err.message,
//     });
//   } else {
//     res
//       .status(500)
//       .json({
//         status: "error",
//         message: "Something went wrong! Please try again later.",
//       });
//   }
// };

module.exports = (err, req, res, next) => {
  err.statuscode = err.statuscode || 500;
  err.message = err.message || "Internal server error";

  //Wrong mangodb id error
  if(err.name=== "CastError"){
    const message=`Resources not found with this id.. Invalid ${err.path}`
    err=new customError(message,400)
  }
  console.log(err.name)

  // Duplicate key error
  if(err.code === 11000){
    const message=`Dulipcate key ${Object.keys(err.keyValue)} Entered`
    err=new customError(message,400)
  }

  //wrong jwt error
  if(err.name === "JsonwebTokenError"){
    const message=`your url is invalid please try again later`
    err=new customError(message,400)
  }

  // if (process.env.NODE_ENV === "development") {
  //   devError(res, err);
  // } else if (process.env.NODE_ENV === "production") {
  //   prodError(res, err);
  // }

  res.status(err.statuscode).json({ success: false, message: err.message });
};
