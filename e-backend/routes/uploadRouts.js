module.exports = (app) => {
  const express = require("express");
  const router = express.Router();
  const { uploadImages } = require("../controllers/uploadControl");
  // const {protect,restrict}
  const { uploadPhoto } = require("../middleware/uploadImages");

  router.route("/img-upload").get(uploadPhoto.array("images", 10) ,uploadImages);

  app.use("/api/upload", router);
};
