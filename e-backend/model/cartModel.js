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
      min: 1,
      default: 1,
    },
    cart_price: {
      type: Number,
      required: true,
    },
    size: {
      type: String,
    },

    cart_delivery_date: {
      type: String,
    },
    cart_three_delivery_data: {
      type: String,
    },
  },

  {
    timestamps: true,
  }
);

cartSchema.methods.setDeliveryData = async function () {
  this.cart_delivery_date = new Date();

  if (this.cart_delivery_date) {
    const threeDaysLater = new Date(this.cart_delivery_date);
    threeDaysLater.setDate(threeDaysLater.getDate() + 3);
    this.cart_three_delivery_data = threeDaysLater;
  }
};

module.exports = mongoose.model("Tbl_cart", cartSchema);
