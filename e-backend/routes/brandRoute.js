module.exports = (app) => {
  const router = require("express").Router();

  const BrandController = require("../controllers/brandController");

  const { brandTitle, getAllBrands, updateBrand, deleteBrand, findBrand } =
    new BrandController();
  var asyncErrorhandler = require("../utils/asyncErrorhandler");

  const { authenticateUser, restrict } = require("../middleware/auth");

  router
    .route("/create-brand")
    .post(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(brandTitle)
    );
  router
    .route("/allbrands")
    .get(
      authenticateUser,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(getAllBrands)
    );
  router
    .route("/updatebrand/:id")
    .patch(
      authenticateUser,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(updateBrand)
    );
  router
    .route("/deleteBrand/:id")
    .delete(
      authenticateUser,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(deleteBrand)
    );
  router
    .route("/findBrand/:id")
    .get(
      authenticateUser,
      restrict("shop admin", "shop admin"),
      asyncErrorhandler(findBrand)
    );
  app.use("/api/brand", router);
};
