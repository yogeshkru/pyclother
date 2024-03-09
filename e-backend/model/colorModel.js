const mongoose = require('mongoose');

const colorSchema = new mongoose.Schema(
    {
        color_title: {
            type: String,
          
          },
          color_hex_name: {
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
      
        
    }
    
);

colorSchema.pre(/^find/,function(next){
  this.find({isDelete:{$ne:0}})
  next()
})

module.exports =  mongoose.model("Tbl_color",colorSchema);
