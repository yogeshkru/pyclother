const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    cart_user_user_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tbl_user",
    },
    cart_product_product_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tbl_product",
    },
    cart_quantity: {
      type: Number,
      required: true,
      min: 1, // Assuming quantity should always be a positive integer
    },
    cart_price: {
      type: Number,
      required: true,
      // You may consider using a specific data type like Decimal128 for currency
    },
    cart_color_color_Id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tbl_color",
    },
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tbl_cart", cartSchema);
