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

  router.route("/product_id/:id").get(getOneProduct);
  router.route("/create_product").post(createProduct);
  router.route("/getall_product").get(getAllProduct);
  router.route("/update_product").patch(updateProduct);
  router.route("/delete").delete(deleteProduct);
  router.route("/addwishlist").post(addToWishList);
  router.route("/ratings").post(ratingfunc);

  app.use("/api/product", router);
};
