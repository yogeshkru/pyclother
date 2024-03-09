const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brand_title: {
    type: String,

  
  },

  brand_description: {
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
    default:true,
    select:false

},

});
brandSchema.pre(/^find/,function(next){
   this.find({isDelete:{$ne:false}})
   next()
})

module.exports = mongoose.model("Tbl_Brand", brandSchema);
