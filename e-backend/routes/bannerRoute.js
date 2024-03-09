module.exports = (app) => {
  const router = require("express").Router();
  const bannner = require("../controllers/bannerControllers");
  const asyncErrorhandler = require("../utils/asyncErrorhandler");
  const { uploadPhoto } = require("../middleware/uploadImages");
  const {
    createBannner,
    getBanners,
    getShopBanners,
    AdminAccessPatch,
    bannerDelete,
  } = new bannner();
  let { authenticateUser, restrict } = require("../middleware/auth");
  router
    .route("/banners")
    .post(
      authenticateUser,
      restrict("shop admin", "super admin"),
      uploadPhoto.array("images", 1),
      asyncErrorhandler(createBannner)
    );
  router
    .route("/banner-get")
    .get(
      authenticateUser,
      restrict("super admin"),
      asyncErrorhandler(getBanners)
    );
  router
    .route("/banner-shop-get")
    .get(
      authenticateUser,
      restrict("shop admin"),
      asyncErrorhandler(getShopBanners)
    );
  router
    .route("/banner-patch/:id")
    .patch(
      authenticateUser,
      restrict("super admin"),
      asyncErrorhandler(AdminAccessPatch)
    );
  router
    .route("/banner-delete")
    .delete(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(bannerDelete)
    );

  app.use("/api/banner", router);
};
