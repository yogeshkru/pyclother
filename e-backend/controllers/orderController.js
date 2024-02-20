const orderModel = require("../model/orderModel");
const CustomError = require("../utils/customError");
const productModel = require("../model/productModel");
const { Types } = require("mongoose");
const shopModel = require("../model/shopModel");
class Order {
  createOrder = async (req, res, next) => {
    try {
      const {
        // user_name,
        order_user_address,

        order_totalPrice,

        order_paymentInfo,
        order_total_Discount,
        cartItem,
      } = req.body;
      const { _id } = req.user;

      // cartItem is [array] which comes from frontend*********************************$in to extract the product by id

      const products = await productModel.find({
        _id: { $in: cartItem.map((item) => item._id) },
      });

      const updateOrders = products.map((product) => {
        const updatedCartItem = cartItem.find((item) =>
          new Types.ObjectId(item._id).equals(product._id)
        );

        if (updatedCartItem) {
          return {
            ...product.toObject(),
            cartUserQuantity: updatedCartItem.cartUserQuantity,
            userSize: updatedCartItem.userSize,
          };
        }
        return null;
      });

      // group cart items by shopId
      const shopItemMap = new Map();

      for (const item of updateOrders) {
        const shopId = item?.shopId;
        if (!shopItemMap.has(shopId)) {
          shopItemMap.set(shopId, []);
        }
        shopItemMap.get(shopId).push(item);
      }

      const orders = [];

      for (const [shopId, items] of shopItemMap) {
        // const totalPrice = items.reduce((acc,curr)=>acc+curr.)
        const order = await orderModel.create({
          cartItem: items,
          order_user_address,
          order_totalPrice,
          order_paymentInfo,
          order_total_Discount,
          order_user: _id,
        });

        orders.push(order);
      }

      res.status(200).json({ orders });
    } catch (error) {
      next(new CustomError(error.message, 400));
    }
  };

  // ***************************All orders of seller **********************

  async getAllSellerOrders(req, res, next) {
    const { _id } = req.user;

    try {
      const orders = await orderModel
        .find({ "cartItem.shopId": _id })
        .sort({ createdAt: -1 });

      res.status(200).json({ success: true, orders });
    } catch (error) {
      return next(new CustomError(error.message, 500));
    }
  }

  // **********************************get user Order **********************

  async getUserOrders(req, res, next) {
    const { _id } = req.user;

    try {
      const userOrder = await orderModel
        .find({ order_user: _id })
        .sort({ createdAt: -1 });

      res
        .status(200)
        .json({ success: true, length: userOrder.length, userOrder });
    } catch (error) {
      return next(new CustomError(error.message, 500));
    }
  }

  // ****************************************************************************************************************************

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
