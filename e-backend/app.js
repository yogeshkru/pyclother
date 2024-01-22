const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const cookie = require("cookie-parser");
const rateLimit = require("express-rate-limit");

const helmet = require("helmet");

const globalError = require("./utils/globalErrorhandler");

const customError = require("./utils/customError");

// *****************Third part liberary****************
app.use(helmet());
app.use(bodyparser.json());
// app.use(bodyparser.json({limit:'10kb'})) // Important
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookie());
app.use(cors());
let limiter = rateLimit({
  max: 1000,
  windowMs: 60 * 60 * 1000,
  message:
    "We have received too many request from this UP. Please try after one hour",
});

app.use("/api", limiter);

if (process.env.NODE_ENV == "PRODUCTION") {
  require("dotenv").config();
}

require("./routes/adminUserRoutes")(app);
require("./routes/couponRoutes")(app);
require("./routes/userRoute")(app)
require("./routes/brandRoute")(app);
require("./routes/categoryRoute")(app);
require("./routes/addressRoute")(app);
require("./routes/colorRoutes")(app);
//Routes error handler
app.all("*", (req, res, next) => {
  const error = new customError(
    `can't find ${req.originalUrl} on the server`,
    404
  );
  next(error);
});

app.use(globalError);
module.exports = app;
