const mongoose = require("mongoose");


const cartSchema = new mongoose.Schema(
  {
    cart_Id:{
       type:Number,
       unique:true
    },
    cart_user_user_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tbl_User"
    },
    cart_product_product_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tbl_Product"
    },
    cart_quantity: {
      type: Number,
      required: true,
      min: 1 // Assuming quantity should always be a positive integer
    },
    cart_price: {
      type: Number,
      required: true
      // You may consider using a specific data type like Decimal128 for currency
    },
    cart_colorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Color"
    }
  },
  {
    timestamps: true
  }
);


module.exports = mongoose.model("tbl_Cart", cartSchema);
