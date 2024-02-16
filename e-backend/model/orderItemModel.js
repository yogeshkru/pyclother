const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
    orderItem_user_Id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tbl_user",
        required: true,
      },
    orderItem_address_Id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tbl_address",
        required:true,
    },
    orderItem_product_Id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tbl_product",
    },
    orderItem_product_name:{
        type:String
    },
    orderItem_product_amount:{
        type:String
    },
    orderItem_product_quantity:{
        type:String
    },
    orderItem_product_cgst_percentage:{
        type:String
    },
    orderItem_product_cgst_value:{
        type:String
    },
    orderItem_product_sgst_percentage:{
     type:String 
    },
    orderItem_product_sgst_value:{
        type:String
    },
    orderItem_product_igst_percentage:{
        type:String
    },
    orderItem_product_igst_value:{
        type:String
    },
    orderItem_total_gst:{
        type:String

    },
    orderItem_product_price:{
        type:Number
    },
    isDelete:{
        type:Boolean,
        default:true
    
    },
    
},{timestamps:true})
module.exports = mongoose.model("Tbl_orderItem",orderItemSchema);

