const asyncErrorHandler = require("../utils/asyncErrorhandler");

const fs = require("fs").promises;
const path = require("path");

exports.uploadImages = asyncErrorHandler(async (req, res) => {
  const files = req?.files;
  const urls = files.map((file) => file.filename);
  res.status(200).json({ urls });
});

exports.BannerImages = asyncErrorHandler(async (req, res) => {
  const files = req?.files;
  const Bannerurls = files.map((file) => file.filename);

  res.status(200).json({ Bannerurls });
});

exports.Categorys = asyncErrorHandler(async (req, res) => {
  const files = req?.files;

  const categoryes = files.map((file) => file.filename);

  res.status(200).json({ categoryes });
});

exports.deleteImageProduct = asyncErrorHandler(async (req, res) => {
  try {
    const filePath = `public/${req.params.productimage}`;

    await fs.unlink(filePath);
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message, message: "no file exist" });
  }
});
