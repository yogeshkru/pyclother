const mongoose = require("mongoose");

const bannerSchma = new mongoose.Schema({
  images:[String],
  ShopId:{type: mongoose.Schema.Types.ObjectId,ref:"Tbl_shop"},
  status:{
   type:String,
   default:"pending",
   enum:[
    "pending",
    "success",
    "rejected"
   ]
  },
  days:{
    type:Number
   
  },
  start_day:{
    type:String
  },
  end_day:{
    type:String
  },
  isDelete: {
    type: Boolean,
    default: true,
    select: false,
  },
},
{ timestamps: true }

);

bannerSchma.pre(/^find/, function (next) {
  this.find({ isDelete: { $ne: false } });
  next();
});

module.exports = mongoose.model("tbl_banner", bannerSchma);
