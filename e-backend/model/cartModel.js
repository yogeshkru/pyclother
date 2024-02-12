const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tbl_user",
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tbl_product",
    },
    cart_quantity: {
      type: String,
      // required: true,
      min: 1, 
      default:1
    },
    cart_price: {
      type: Number,
      required: true,
      // You may consider using a specific data type like Decimal128 for currency
    },
    size:{
      type:String
    }
    // cart_color_color_Id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Tbl_color",
    // },
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tbl_cart", cartSchema);
