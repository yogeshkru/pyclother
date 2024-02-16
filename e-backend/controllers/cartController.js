const { default: mongoose } = require("mongoose");
const cartModel = require("../model/cartModel");
const CustomError = require("../utils/CustomError");
const productModel = require("../model/productModel");


class Carts {
  cart = async (req, res, next) => {
    const { productId } = req.body;
    const { _id } = req.user;

    try {
      const existingCartEntry = await cartModel.findOne({
        userId: _id,
        productId: productId,
      });

      if (existingCartEntry) {
        const error = new CustomError(
          "Product already exists in the cart",
          400
        );
        return next(error);
      }
 
      const product = await productModel.findById(productId)

      const newCart = await cartModel.create({
        userId: _id,
        productId: productId,
        // size,
        cart_price: product.price,
      });
      res.status(200).json({ newCart });
    } catch (error) {
      next(new CustomError(error.message, 500));
    }
  };
  deleteItemCart = async (req, res, next) => {
    const { _id } = req.user;
    const { id } = req.params;
    try {
      const removeProduct = await cartModel.findOneAndDelete({
        userId: _id,
        _id: id,
      });
      if (!removeProduct) {
        res.status(404).json({ message: "product not found in cart" });
      } else {
        res.status(200).json({ message: "Product removed from cart" });
      }
    } catch (error) {
      next(new CustomError(error.message, 500));
    }
  };

  getUserCart = async (req, res) => {
    const { _id } = req.user;


    //  let userExist = await cartModel.findOne({userId:_id})

    // const cart = await cartModel.aggregate([
    //   {
    //     $match: { userId: new mongoose.Types.ObjectId(_id) },
    //   },
    //   {
    //     $lookup: {
    //       from: "tbl_products",
    //       localField: "productId",
    //       foreignField: "_id",
    //       as: "productId"
    //     },
    //   },
    // ]);


    
        const cart = await cartModel.find({ userId: _id }).populate("productId");

        // if (!cart || cart.length === 0) {
        //     return res.status(404).json({ message: "Cart not found" });
        // }

        for (let i = 0; i < cart.length; i++) {
            await cart[i].setDeliveryData();
        }







  //   const cart = await cartModel.find({ userId: _id }).populate("productId");

  //   if (!cart) {
  //     return res.status(404).json({ message: "Cart not found" });
  //   }



  // for (let i = 0; i < cart.length; i++) {
  //     await cart[i].setDeliveryData();
  // }

    // Call setDeliveryData on the cart object


    res.status(200).json({ cart});
  };





  updateProductQuantity = async (req, res, next) => {
    const { _id } = req.user;
    const { id } = req.params;

    try {
      const cartItem = await cartModel.findOne({ userId: _id, _id: id });
      cartItem.cart_quantity = req.body.newQuantity;
      await cartItem.save();
      res.status(200).json({ cartItem });
    } catch (error) {
      next(new CustomError(error.message, 400));
    }
  };
}

module.exports = Carts;
