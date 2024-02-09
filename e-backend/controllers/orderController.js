const orderModel = require("../model/orderModel");
const CustomError = require("../utils/customError");

class Order {
  createOrder = async (req, res, next) => {
    const {
      // user_name,
      order_user_address,

      order_totalPrice,

      order_paymentInfo,
      order_total_Discount,
    } = req.body;
    const { _id } = req.user;

    try {
      const order = await new orderModel({
        order_user: _id,

        order_user_address,
        order_totalPrice,
        order_total_Discount,
        order_paymentInfo,
      }).save();

      res.status(200).json({ order });
    } catch (error) {
      next(new CustomError(error.message, 400));
    }
  };

  async getoneorder(req, res, next) {
    const { id } = req.params;
    try {
      const orderone = await orderModel.findById(id);
      if (!orderone) {
        return res.status(404).json({
          status: 404,
          message: "order not found",
        });
      }
      res.status(200).json({ orderone });
    } catch (error) {
      next(new CustomError(error.message, 500));
    }
  }
  async getAllOrders(req, res, next) {
    try {
      const orders = await orderModel.find().populate("user");
      res.status(200).json({ orders });
    } catch (error) {
      next(new CustomError(error.message, 404));
    }
  }

  async updateOrders(req, res, next) {
    const { id } = req.params;
    try {
      const orders = await orderModel.findById(id);
      orders.orderStatus = req.body.orderStatus;
      await orders.save();
    } catch (error) {
      next(new CustomError(error.message, 404));
    }
  }
}

module.exports = Order;
