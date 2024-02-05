module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const {
    uploadImages,
    BannerImages,
    deleteImageProduct
  } = require("../controllers/uploadControl");
  // const {protect,restrict}
  const { uploadPhoto,bannerImage } = require("../middleware/uploadImages");
  var { authenticateUser, restrict } = require("../middleware/auth");

  router
    .route("/img-upload")
<<<<<<< HEAD
    .get(
      // authenticateUser,
      // restrict("shop admin", "super admin"),
      uploadPhoto.array("images", 5),
=======
    .patch(
      // authenticateUser,
      // restrict("shop admin", "super admin"),
      uploadPhoto.array("images", 9),
>>>>>>> 4a4e520a37268963453ff43be9a35c0916157d73
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


    router
    .route("/delete-product-image/:productimage")
    .delete(
      // authenticateUser,
      // restrict("super admin","shop admin"),
      deleteImageProduct

    )
  app.use("/api/upload", router);
};
