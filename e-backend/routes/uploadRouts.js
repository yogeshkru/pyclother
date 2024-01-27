module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const { uploadImages } = require("../controllers/uploadControl");
  // const {protect,restrict}
  const { uploadPhoto } = require("../middleware/uploadImages");
  var { authenticateUser, restrict } = require("../middleware/auth");

  router
    .route("/img-upload")
    .get(
      authenticateUser,
      restrict("shop admin", "super admin"),
      uploadPhoto.array("images", 10),
      uploadImages
    );

  app.use("/api/upload", router);
};
