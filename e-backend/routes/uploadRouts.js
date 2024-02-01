module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const {
    uploadImages,
    BannerImages,
  } = require("../controllers/uploadControl");
  // const {protect,restrict}
  const { uploadPhoto } = require("../middleware/uploadImages");
  var { authenticateUser, restrict } = require("../middleware/auth");

  router
    .route("/img-upload")
    .post(
      authenticateUser,
      restrict("shop admin", "super admin"),
      uploadPhoto.array("images", 1),
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
