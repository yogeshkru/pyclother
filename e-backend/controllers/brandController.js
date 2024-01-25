const brandModel = require("../model/brandModel");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const customError = require("../utils/customError");

//Post
exports.brandTitle = asyncErrorhandler(async (req, res, next) => {

  try {
    const brandAlready = await brandModel.findOne({ brand_title: req.body.brand_title });
    console.log(brandAlready)
    if (brandAlready) {
      return next(new customError("Brand is already exists", 409));
    }
    const { brand_title } = req.body;

    let brand = await brandModel.create({ brand_title });
    res.status(201).json({ brand });
  } catch (err) {
    return next(new customError(err.message, 500));
  }
});

//get
exports.getAllbrands = asyncErrorhandler(async (req, res, next) => {
  try {
    const getbrand = await brandModel.find();
    res.status(200).json({ getbrand });
  } catch (err) {
    return next(new customError(err.message, 500));
  }
});

//update
exports.updateBrand = asyncErrorhandler(async (req, res, next) => {
  try {
    const updatesbrand = await brandModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { runValidators: true, new: true }
    );
    res.status(200).json({ updatesbrand });
  } catch (err) {
    return next(new customError(err.message, 500));
  }
});

//Delete
exports.deleteBrand = asyncErrorhandler(async (req, res, next) => {
  try {
    const deletesbrand = await brandModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ deletesbrand });
  } catch (err) {
    return next(new customError(err.message, 500));
  }
});

//findone
exports.findBrand = asyncErrorhandler(async (req, res, next) => {
  try {
    const findBrand = await brandModel.findById(req.params.id);
    res.status(200).json({ findBrand });
  } catch (err) {
    next(new customError(err.message, 500));
  }
});
