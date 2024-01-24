const { default: mongoose } = require("mongoose");
const cartModel = require("../model/cartModel");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const customError = require("../utils/customError");

exports.cart = asyncErrorhandler(async (req, res, next) => {
  const { productId, color, quantity, price } = req.body;
  const { _id } = req.user;

  try {
    const newCart = await cartModel.create({
      cart_user_user_Id: _id,
      cart_product_product_Id: productId,
      cart_color_color_Id: color,
      cart_price: price,
      cart_quantity: quantity,
    });
    console.log(newCart,"jcfgbwiuegfvw3ug8v")
    res.status(200).json({ newCart });
  } catch (error) {
    next(new customError(error.message, 500));
  }
});

exports.deleteItemCart = asyncErrorhandler(async (req, res, next) => {
  const { _id } = req.user;
  const { id } = req.params;
  try {
    const removeProduct = await cartModel.findOneAndDelete({
      cart_user_user_Id: _id,
      _id: id,
    });
    if (!removeProduct) {
      res.status(404).json({ message: "product not found in cart" });
    } else {
      res.status(200).json({ message: "Product removed from cart" });
    }
  } catch (error) {
    next(new customError(error.message, 500));
  }
});

exports.getUserCart = asyncErrorhandler(async (req, res, next) => {
  const { _id } = req.user;
  const cart = await cartModel.aggregate([
    {
      $match: {
        cart_user_user_Id: new mongoose.Types.ObjectId(_id),
      },
    },
    {
      $lookup: {
        from: "tbl_products",
        localField: "cart_product_product_Id",
        foreignField: "_id",
        as: "product",
      },
    },
    {
      $lookup: {
        from: "tbl_colors",
        localField: "cart_color_color_Id",
        foreignField: "_id",
        as: "color",
      },
    },
  ]);
  res.status(200).json({ cart });
  console.log(cart,"rygvfiugvweriuggiu")
});

exports.updateProductQuantity = asyncErrorhandler(async (req, res, next) => {
  const { _id } = req.user;
  const { id, newQuantity } = req.params;

  try {
    const cartItem = await cartModel.findOne({ userId: _id, id: id });
    cartItem.cart_quantity = newQuantity;
    await cartItem.save()
    res.status(200).json({ cartItem });
  } catch (error) {
    next(new customError(error.message, 400));
  }
});
