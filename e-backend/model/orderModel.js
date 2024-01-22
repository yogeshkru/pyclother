const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    order_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tbl_user",
      required: true,
    },
    order_shippingInfo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tbl_address",
      required: true,
    },
    order_paymentInfo: {
      paymentMethod: {
        type: String,
        enum: ["Razorpay", "COD"],
        default: "Razorpay",
      },
      razorpayOrderId: {
        type: String,
        required: function () {
          return this.order_paymentInfo.paymentMethod !== "COD";
        },
      },
      razorpayPaymentId: {
        type: String,
        required: function () {
          return this.order_paymentInfo.paymentMethod !== "COD";
        },
      },
    },
    order_orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Tbl_product",
          required: true,
        },
        color: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Tbl_color",
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: { type: Number, required: true },
      },
    ],
    order_paidAt: {
      type: Date,
      default: function () {
        return this.order_paymentInfo.paymentMethod !== "COD"
          ? Date.now()
          : null;
      },
    },
    order_month: {
      type: String,
      default: new Date().getMonth().toString(),
    },
    order_totalPrice: {
      type: Number,
    },
    order_totalPriceAfterDiscount: {
      type: Number,
    },
    orderStatus: {
      type: String,
      default: function () {
        return this.order_paymentInfo.paymentMethod === "COD"
          ? "Pending"
          : "Ordered";
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tbl_order", orderSchema);
