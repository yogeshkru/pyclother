module.exports = (app) => {
  const router = require("express").Router();

  const BrandController = require("../controllers/brandController");

  const { brandTitle, getAllBrands, updateBrand, deleteBrand, findBrand } =
    new BrandController();
  var asyncErrorhandler = require("../utils/asyncErrorhandler");

  const { shopProtect, restrict } = require("../middleware/auth");

  router
    .route("/create-brand")
    .post(
      asyncErrorhandler(brandTitle)
    );
  router
    .route("/allbrands")
    .get(
      shopProtect,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(getAllBrands)
    );
  router
    .route("/updatebrand/:id")
    .patch(
      shopProtect,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(updateBrand)
    );
  router
    .route("/deleteBrand/:id")
    .delete(
      shopProtect,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(deleteBrand)
    );
  router
    .route("/findBrand/:id")
    .get(
      shopProtect,
      restrict("shop admin", "shop admin"),
      asyncErrorhandler(findBrand)
    );
  app.use("/api/brand", router);
};
