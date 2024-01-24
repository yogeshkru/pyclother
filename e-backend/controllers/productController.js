const productModel = require("../model/productModel");
const UserModel = require("../model/userModel");
const CustomError = require("../utils/customError");
const Apifeatures = require("../utils/reuseable");

class Product {
  createProduct = async (req, res) => {
    const newProduct = await ProductModel.create(req.body);

    res.status(201).json({ newProduct });
  };

  updateProduct = async function (req, res, next) {
    const updateProduct = await ProductModel.findOneAndUpdate(
      { _id: req.params.id },
      req,
      body,
      { new: true }
    );

    if (!updateProduct) {
      const error = new CustomError("Product with that ID is not fount", 404);
      return next(error);
    }

    res.status(200).json({ updateProduct });
  };

  async deleteProduct(req, res, next) {
    const deleteProduct = await productModel.findByIdAndDelete(req.params.id);

    if (!deleteProduct) {
      const error = new CustomError("Product with that ID is not found", 404);
      return next(error);
    }
    res.status(204).json({ message: "Deleted", data: null });
  }

  getOneProduct = async (req, res, next) => {
    const { id } = req.params;

    const product = await ProductModel.findById(id).populate("color");

    if (!product) {
      const error = new CustomError(`Product with that ID is not found`, 404);
      return next(error);
    }

    await productModel.findByIdAndUpdate(
      id,
      { $inc: { numViews: 1 } },
      { new: true }
    );
    res.status(200).json({ product });
  };

  getAllProduct = async (req, res) => {
    const getProduct = new Apifeatures(ProductModel.find(), req.query)
      .excludes()
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const getAllProducts = await getProduct.query;
    res.status(200).json({ getAllProducts, length: getProduct.length });
  };

  addToWishList = async function (req, res, next) {
    const { _id } = req.user;
    const { prodId } = req.body;
    const user = await UserModel.findById(_id);

    if (!user) {
      const error = new CustomError(
        "User with the given ID does not exist",
        404
      );
      return next(error);
    }

    const alreadyAdded = user.user_wishlist.find(
      (id) => id.toString() === prodId
    );

    if (alreadyAdded) {
      let userProduct = await UserModel.findByIdAndDelete(
        _id,
        { $pull: { user_wishlist: prodId } },
        { new: true }
      );

      return res.status(200).json({ message: "Addedtowishlist", userProduct });
    } else {
      let productUser = await UserModel.findByIdAndUpdate(
        _id,
        { $push: { user_wishlist: prodId } },
        { new: true }
      );
      return res.status(200).json({ productUser });
    }
  };

  async ratingfunc(req, res, next) {
    const { _id } = req.user;
    const { star, prodId, comment } = req.body;

    const Product = await productModel.findById(prodId);
    if (!Product) {
      const error = new CustomError("Product not exist", 404);
      return next(error);
    }

    let alreadyRated = Product.ratings.find(
      (userId) => userId.postedBy.toString() === _id.toString()
    );

    if (alreadyRated) {
      await productModel.updateOne(
        { ratings: { $elemMatch: alreadyRated } },
        { $set: { "ratings.$.star": star, "ratings.$.comment": comment } },
        { new: true }
      );
    } else {
      await productModel.findByIdAndUpdate(prodId, {
        $push: { ratings: { star: star, postedBy: _id, comment: comment } },
      });
    }

    const getAllRatings = await productModel.findById(prodId);

    const totalrating = getAllRatings.ratings.length;

    let ratingSum = getAllRatings.ratings
      .map((item) => item.star)
      .reduce((prev, curr) => prev + curr, 0);

    let actualRating = Math.round(ratingSum / totalrating);
    let finalproduct = await productModel.findByIdAndUpdate(
      prod,
      { totalrating: actualRating },
      { new: true }
    );
    res.status(200).json({ finalproduct });
  }
}

module.exports = Product;
