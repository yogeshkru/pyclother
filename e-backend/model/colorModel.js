const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema(
    {
        color: {
            type: String,
            required: [true, "color is Required"]
        }
    }
);


module.exports = new mongoose.model("tbl_color",colorSchema);
