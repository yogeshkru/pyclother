const productModel = require("../model/productModel");
const userModel = require("../model/userModel");

const CustomError = require("../utils/customError");
const Apifeatures = require("../utils/reuseable");

class Product {
  createProduct = async (req, res) => {
    const { _id } = req.user;
    const files = req?.files;
    const combinedData = Object.assign({}, req.body, { shopId: _id });

    combinedData.images = files.map((file) => `${file.filename}`);
    const newProduct = await productModel.create(combinedData);

   
    res.status(201).json({ newProduct });
  };

  getAllShopProduct = async (req, res) => {
    const { _id } = req.user;
    const shopData = await productModel.find({ shopId: _id }).populate("Gst");

    res.status(200).json({ shopData });
  };

  updateProduct = async function (req, res, next) {
    const updateProduct = await productModel.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
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

    const product = await productModel.findById(id).populate({
      path: 'ratings.postedBy', 
      model: 'Tbl_user', 
      select: 'user_name user_email', 
    });
    

    if (!product) {
      const error = new CustomError(`Product with that ID is not found`, 404);
      return next(error);
    }

    await productModel.findByIdAndUpdate(
      id,
      { $inc: { numViews: 1 } },
      { new: true }
    )
    res.status(200).json({ product });
  };

  getAllProduct = async (req, res) => {
    const getProduct = new Apifeatures(productModel.find(), req.query)
      .excludes()
      .filter()
      .sort()
      .limitFields()
      .search()
      .paginate()


    const getAllProducts = await getProduct.query;
    res.status(200).json({ getAllProducts, length: getProduct.length });
  };

  // addToWishList = async function (req, res, next) {
  //   const { _id } = req.user;
  //   const { prodId } = req.body;
  //   const user = await userModel.findById(_id);

  //   if (!user) {
  //     const error = new CustomError(
  //       "User with the given ID does not exist",
  //       404
  //     );
  //     return next(error);
  //   }

  //   const alreadyAdded = user.user_wishlist.find(
  //     (id) => id.toString() === prodId
  //   );

  //   if (alreadyAdded) {
  //     let userProduct = await userModel.findByIdAndDelete(
  //       _id,
  //       { $pull: { user_wishlist: prodId } },
  //       { new: true }
  //     );

  //     return res.status(200).json({ message: "Addedtowishlist", userProduct });
  //   } else {
  //     let productUser = await userModel.findByIdAndUpdate(
  //       _id,
  //       { $push: { user_wishlist: prodId } },
  //       { new: true }
  //     );
  //     return res.status(200).json({ productUser });
  //   }
  // };

  addToWishList = async (req, res, next) => {
    const { _id } = req.user;
    const { prodId } = req.params;
    const user = await userModel.findById(_id);
  
    if (!user) {
      const error = new CustomError(
        "User with the given ID does not exist",
        404
      );
      return next(error);
    }
  
    const index = user.user_wishlist.indexOf(prodId); 
  
    if (index !== -1) { 
      user.user_wishlist.splice(index, 1);
    } else {
      user.user_wishlist.push(prodId); 
    }
  
    await user.save(); 
  
    return res.status(200).json({ message: "Wishlist updated successfully", user });
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
      prodId,
      { totalrating: actualRating },
      { new: true }
    )
    res.status(200).json({ finalproduct });
  }
}

module.exports = Product;
