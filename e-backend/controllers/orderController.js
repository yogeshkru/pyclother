const orderModel = require("../model/orderModel");
const CustomError = require("../utils/customError");

class Order {
  createOrder = async (req, res) => {
    const {
      shippingInfo,
      orderItems,
      totalPrice,
      totalPriceAfterDiscount,
      paymentInfo,
    } = req.body;
    const { _id } = req.user;

    try {
      const order = await new orderModel({
        order_user: _id,
        order_orderItems: orderItems,
        order_totalPrice: totalPrice,
        order_totalPriceAfterDiscount: totalPriceAfterDiscount,
        order_paymentInfo: paymentInfo,
        order_shippingInfo: shippingInfo,
      }).save();

      res.status(200).json({ order, message: "Orderplaced" });
    } catch (error) {
      next(new CustomError(error.message, 400));
    }
  };

  async getMyOrder(req,res,next) {
    const { _id } = req.user;
    try {
      const orders = await orderModel
        .find({ order_user: _id })
        .populate("order_orderItems.product")
        .populate("order_orderItems.color")
        .populate("order_user");

      res.status(200).json({ orders });
    } catch (error) {
      next(new CustomError(error.message, 404));
    }
  }

  async getAllOrders(req,res,next) {
    try {
      const orders = await orderModel.find().populate("user");
      res.status(200).json({ orders });
    } catch (error) {
      next(new CustomError(error.message, 404));
    }
  }

async updateOrders(req,res,next){
    const {id}=req.params
    try{

        const orders= await orderModel.findById(id)
        orders.orderStatus=req.body.orderStatus;
        await orders.save()
    }catch(error){
        next(new CustomError(error.message,404))
    }
}



}

module.exports = Order;
