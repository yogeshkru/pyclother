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
    },
    
  
    order_paymentInfo: {
      // paymentMethod: {
      //   type: String,
      //   enum: ["Razorpay", "COD"],
      //   default: "Razorpay",
      // },
      razorpayOrderId: {
        type: String,
        // required: function () {
        //   return this.order_paymentInfo.paymentMethod !== "COD";
        // },
        required:true
      },
      razorpayPaymentId: {
        type: String,
        required:true
        // required: function () {
        //   return this.order_paymentInfo.paymentMethod !== "COD";
        // },
      },
    },
    
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Tbl_product",
          // required: true,
        },
        // color: {
        //   type:String
        //   // ref: "Color",
        //   // required: true,
        // },
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


      default:()=>{
        const monthName =['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return monthName[new Date().getMonth()]
      }
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

    orderStatus: {
      type: String,
      default:"Ordered",
     
      enum: ["Pending", "Confirmed", "Out for Delivery", "Delivered", "Cancelled","Ordered"]

      // default: function () {
      //   return this.order_paymentInfo.paymentMethod === "COD"
      //     ? "Pending"
      //     : "Ordered";
      // },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tbl_order", orderSchema);
