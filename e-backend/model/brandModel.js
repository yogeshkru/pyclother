const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brand_title: {
    type: String,
 
    required: [true, "Brand is Required"],
  },
});


module.exports = mongoose.model("Tbl_Brand", brandSchema);
