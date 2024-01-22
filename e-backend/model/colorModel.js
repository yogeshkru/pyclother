const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema(
    {
        color_title: {
            type: String,
            required: [true, "color is Required"]
        }
    }
);


module.exports =  mongoose.model("Tbl_color",colorSchema);
