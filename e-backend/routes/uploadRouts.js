module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const { uploadImages } = require("../controllers/uploadControl");
  // const {protect,restrict}
  const { uploadPhoto } = require("../middleware/uploadImages");
  var { shopProtect, restrict } = require("../middleware/auth");

  router
    .route("/img-upload")
    .get(
      shopProtect,
      restrict("shop admin", "super admin"),
      uploadPhoto.array("images", 10),
      uploadImages
    );

  app.use("/api/upload", router);
};
