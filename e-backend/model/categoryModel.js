const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  category_title: {
    type: String,
  
  },
  category_description: {
    type: String,
   
  },

  meta_title: {
    type: String,
  
  },

  meta_description: {
    type: String,
 
  },
  meta_keyWord:{
    type: String,
   
  },
  sort:{
    type:Number,
   
    
  },
  isDelete:{
    type:Boolean,
    default:true

},

},{timestamps:true});

module.exports = mongoose.model("Tbl_category", categorySchema);
