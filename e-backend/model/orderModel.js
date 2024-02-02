const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    order_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tbl_user",
      required: true,
    },
    order_user_address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tbl_address",
      required: true,
    },
    
    order_user_email:{
      type:String,
      require:true
    },
    order_user_phone:{
      type:Number,
      require:true
    },
    // order_paymentInfo: {
    //   paymentMethod: {
    //     type: String,
    //     enum: ["Razorpay", "COD"],
    //     default: "Razorpay",
    //   },
    //   razorpayOrderId: {
    //     type: String,
    //     required: function () {
    //       return this.order_paymentInfo.paymentMethod !== "COD";
    //     },
    //   },
    //   razorpayPaymentId: {
    //     type: String,
    //     required: function () {
    //       return this.order_paymentInfo.paymentMethod !== "COD";
    //     },
    //   },
    // },
  
    // order_paidAt: {
    //   type: Date,
    //   default: function () {
    //     return this.order_paymentInfo.paymentMethod !== "COD"
    //       ? Date.now()
    //       : null;
    //   },
    // },
    order_month: {
      type: String,
      default: new Date().getMonth().toString(),
    },
    order_totalPrice: {
      type: Number,
    },
    order_total_Discount: {
      type: Number,
    },
    order_total_cgst:{
      type:Number
    },
    order_total_sgst:{
      type:Number
    },
    order_total_igst:{
      type:Number,
    },
    order_total_amount:{
      type:Number
    },

    // orderStatus: {
    //   type: String,
    //   default: function () {
    //     return this.order_paymentInfo.paymentMethod === "COD"
    //       ? "Pending"
    //       : "Ordered";
    //   },
    // },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tbl_order", orderSchema);
