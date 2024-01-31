const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cookie = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const morgan = require("morgan")
const hpp = require("hpp");
const path = require("path");

const app = express();

const globalError = require("./utils/globalErrorhandler");
const customError = require("./utils/customError");

// *************************************************
if (process.env.NODE_ENV =="production") {
require("dotenv").config({ path: "./config.env" });
}

if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
require("dotenv").config({ path: "./config.env" });


  
}

// *****************Third part liberary****************
app.use(helmet());
app.use(cors());

app.use(bodyparser.json({ limit: "10kb" })); // Important
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookie());

// prevent the data do not inject the SQL query
app.use(mongoSanitize());

// prevent the data do injecting from javascript code
app.use(xss());

// prevent parameter pollution
app.use(
  hpp({ whitelist: ["brand", "quantity", "ratings", "price", "createdAt"] })
);

app.use(express.static(path.join(__dirname, "public")));

// // *********************************************************************
// let limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000,
//   message:
//     "We have received too many request from this UP. Please try after one hour",
// });

// app.use("/api", limiter);

// ********************************************************************************************************
function DataBaseConnect() {
  mongoose
    .connect(process.env.BASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`${data.connection.host}`);
    })
    .catch((err) => {
      console.log("connection error" + err);
    });
}

DataBaseConnect();

// ********************************************************************************************************
require("./routes/adminUserRoutes")(app);
require("./routes/cartRoutes")(app);
require("./routes/enquiryRoutes")(app);
require("./routes/couponRoutes")(app);
require("./routes/userRoute")(app);
require("./routes/brandRoute")(app);
require("./routes/categoryRoute")(app);
require("./routes/addressRoute")(app);
require("./routes/colorRoutes")(app);
require("./routes/blogRoutes")(app);
require("./routes/shopRoute")(app);
require("./routes/orderRoutes")(app);
require("./routes/uploadRouts")(app);
require("./routes/productRoutes")(app)
// ***********************************************************************
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
