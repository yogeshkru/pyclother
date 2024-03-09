const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your event product"],
    },
    description: {
      type: String,
      required: [true, "Please enter your event product description"],
    },
    category: {
      type: String,
      required: [true, "Please enter your event product category"],
    },
    start_date: {
      type: Date,
      required: true,
    },
    finish_date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      default: "Running",
    },
    originalPrice: {
      type: Number,
    },
    discountPrice: {
      type: Number,
      required: [true, "Please enter your event price"],
    },
    images: Array,
 
    shopId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tbl_shop",
    },
    sold_out: {
      type: Number,
      default: 0,
    },
    isDelete:{
      type:Boolean,
      default:true,
      select:false
  
  },
  
  },
  { timestamps: true }
);

eventSchema.pre(/^find/,function(next){
  this.find({isDelete:{$ne:false}})
  next()
})

module.exports = mongoose.model("Tbl_event", eventSchema);
