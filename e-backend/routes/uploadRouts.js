module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const {
    uploadImages,
    BannerImages,
  } = require("../controllers/uploadControl");
  // const {protect,restrict}
  const { uploadPhoto,bannerImage } = require("../middleware/uploadImages");
  var { authenticateUser, restrict } = require("../middleware/auth");

  router
    .route("/img-upload")
    .patch(
      // authenticateUser,
      // restrict("shop admin", "super admin"),
      uploadPhoto.array("images", 9),
      uploadImages
    );

  router
    .route("/banner-upload")
    .post(
      authenticateUser,
      restrict("super admin"),
      uploadPhoto.array("images", 1),
      BannerImages
    );
  app.use("/api/upload", router);
};
