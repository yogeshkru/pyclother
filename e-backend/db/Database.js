const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.BASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`${data.connection.host}`);
    })
    .catch((err) => {
      console.log("connection error"+ err);
    });
};
module.exports=connectDatabase
