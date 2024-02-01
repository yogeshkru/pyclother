const asyncErrorHandler = require("../utils/asyncErrorhandler");

const fs = require("fs");

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
