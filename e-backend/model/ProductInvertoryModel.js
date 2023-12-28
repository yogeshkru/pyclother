const mongoose=require('mongoose')


const ProductInvertorySchema=mongoose.Schema({
    product_ID:{
        type:Number,
        required:true
    },
    quantity:{
        type:String,
        required:true
    },
    SKU_ID:{
        type:Number,
        required:true
    }
})
module.exports = mongoose.model('ProductInvertorySchema', blogSchema);
