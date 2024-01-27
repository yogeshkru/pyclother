module.exports = (app) => {
  const Product = require("../controllers/productController");
  const router = require("express").Router();
  const {
    createProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    addToWishList,
    ratingfunc,
  } = new Product();

  const asyncErrorHandler = require("../utils/asyncErrorhandler");

  var { authenticateUser, restrict } = require("../middleware/auth");

  router.route("/product-id/:id").get(asyncErrorHandler(getOneProduct));
  router.route("/getall-product").get(asyncErrorHandler(getAllProduct));

  // The below url's manipulate by user's
  router
    .route("/addwishlist")
    .post(authenticateUser, asyncErrorHandler(addToWishList));
  router.route("/ratings").post(authenticateUser, asyncErrorHandler(ratingfunc));

  // The below url's manipulate by admin's
  router
    .route("/create-product")
    .post(
      authenticateUser,
      restrict("shop admin", "super admin"),
      asyncErrorHandler(createProduct)
    );
  router
    .route("/update-product/:id")
    .patch(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorHandler(updateProduct)
    );
  router
    .route("/delete/:id")
    .delete(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorHandler(deleteProduct)
    );

  app.use("/api/product", router);
};
// router
//   .route("/create_product")
//   .post(
//     asyncErrorhandler(async (req, res, next) => {
//       const testToken = req.headers.authorization;
//       let token;
//       if (testToken && testToken.startsWith("Bearer")) {
//         token = testToken.split(" ")[1];
//       }
//       if (!token) {
//         const error = new CustomError("You are not logged in", 401);
//         return next(error);
//       }

//       let user;
//       const decodedToken = await util.promisify(jwt.verify)(
//         token,
//         process.env.SECRET_STRING
//       );

//       // Check if the decoded token corresponds to a shop user
//       if (decodedToken.shopAdmin) {
//         user = await shopModel.findById(decodedToken.id);
//       } else {
//         // Otherwise, assume it's a regular user
//         user = await userModel.findById(decodedToken.id);
//       }

//       if (!user) {
//         const error = new CustomError(
//           "The user with the given token does not exist",
//           401
//         );
//         return next(error);
//       }

//       if (await user.isPasswordChange(decodedToken.iat)) {
//         const error = new CustomError(
//           "The password has been changed recently. Please log in again",
//           401
//         );
//         return next(error);
//       }

//       req.user = user;
//       next();
//     }),
//     restrict("shop admin", "super admin"),
//     asyncErrorHandler(createProduct)
//   );
