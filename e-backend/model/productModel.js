const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      // required: true,
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

    shopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tbl_shop",
    },
    images: [{type:String}],
    color: String,

    ratings: [
      {
        star: Number,
        comment: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Tbl_user" },
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
    model: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    stack: {
      type: Number,
    },
    Available: { type: Boolean, default: true },
    // companyId:{},
    // branchId:{}
    size: {
      type:[],
      // required:true
    },

    sku: String,
    tag: String,

    Gst: { type: mongoose.Schema.Types.ObjectId, ref: "Tbl_gst" },
    rewardpoint: String,
    sort: String,
    length: String,

    height: String,
    diamension_class: String,
    brether: String,
    weight: String,
    weight_class: String,
    meta_title: String,
    meta_description: String,
    meta_keyboard: String,
    tax:String,
    discount:String,
    isDelete:{
      type:Boolean,
      default:true,
      select:false
  },

  
    fabric:String,
    material:String,
    fit:String,
    neck:String,
    sleeve:String,
    gender:{
      type:String,
      required:[true,"gender is required"]
    }
  
  },
  

  { timestamps: true }
);

productSchema.pre(/^find/,function(next){
  this.find({isDelete:{$ne:false}})
  next()
})


module.exports = mongoose.model("Tbl_product", productSchema);
