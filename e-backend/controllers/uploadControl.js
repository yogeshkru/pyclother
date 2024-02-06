const asyncErrorHandler = require("../utils/asyncErrorhandler");

const fs = require("fs").promises;
const path = require("path");

exports.uploadImages = asyncErrorHandler(async (req, res) => {
  const files = req?.files;
  console.log(files)
  const urls = files.map((file) => file.filename);
  res.status(200).json({ urls });
});

exports.BannerImages = asyncErrorHandler(async (req, res) => {
  const files = req?.files;
  const Bannerurls = files.map((file) => file.filename);

  res.status(200).json({ Bannerurls });
});

exports.deleteImageProduct = asyncErrorHandler(async (req, res) => {
  try {
    const filePath = path.join(__dirname, "../public", req.params.productimage);
    console.log(filePath)

    await fs.unlink(filePath);
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(404).json({ error: error.message,message:"no file exist"});
  }
});
