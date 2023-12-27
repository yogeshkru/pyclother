const mongoose = require("mongoose");

const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URL, {
        // useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log(`Connected to MongoDB at ${process.env.MONGODB_URL}`);
    }).catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
};

module.exports = connectDatabase;
