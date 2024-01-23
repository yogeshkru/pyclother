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

  var { shopProtect, restrict, userProtect } = require("../middleware/auth");

  router.route("/product_id/:id").get(asyncErrorHandler(getOneProduct));
  router.route("/getall_product").get(asyncErrorHandler(getAllProduct));

  // The below url's manipulate by user's
  router
    .route("/addwishlist")
    .post(userProtect, asyncErrorHandler(addToWishList));
  router.route("/ratings").post(userProtect, asyncErrorHandler(ratingfunc));

  // The below url's manipulate by admin's
  router
    .route("/create_product")
    .post(
      shopProtect,
      restrict("shop admin", "super admin"),
      asyncErrorHandler(createProduct)
    );
  router
    .route("/update_product/:id")
    .patch(
      shopProtect,
      restrict("super admin", "shop admin"),
      asyncErrorHandler(updateProduct)
    );
  router
    .route("/delete/:id")
    .delete(
      shopProtect,
      restrict("super admin", "shop admin"),
      asyncErrorHandler(deleteProduct)
    );

  app.use("/api/product", router);
};
