const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
    
    },
    images: [],
    color:{
      type:String,
      required:true
    },
    ratings: [
      {
        star: Number,
        comment: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    numViews: {
      type: Number,
      default: 0,
    },
    model:{
      type:String,
      required:true
    },
    category:{
      type:String,
      required:true
    },
    stack:{
     type:Number

    },
    Available: { type: Boolean, default: true },
    // companyId:{},
    // branchId:{}
    size: String,


    sku: String,
    tag: String,
    
    // gst_Id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Tbl_gst",
    //   required:true
    // },
    Gst:String,
    rewardpoint:String,
    sort:String,
    length:String,
    width:String,
    height:String,
    diamension_class:String,
    brether:String,
    weight:String,
    weight_class:String,
    meta_title:String,
    meta_description:String,
    meta_keyboard:String


  
  },

  { timestamps: true }
);

module.exports = mongoose.model("Tbl_product", productSchema);
