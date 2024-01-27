const enquiryModel = require("../model/enquiryModel");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const customError = require("../utils/customError");

exports.enquiry = asyncErrorhandler(async (req, res, next) => {
  const {
    enquiry_name,
    enquiry_email,
    enquiry_mobile,
    enquiry_comment,
    enquiry_status,
  } = req.body;
  try {
    const newEnquiry = await enquiryModel.create({
      enquiry_name,
      enquiry_email,
      enquiry_mobile,
      enquiry_comment,
      enquiry_status,
    });
    res.status(201).json({ newEnquiry });
  } catch (error) {
    next(new customError(error.message, 500));
  }
});

exports.getEnquiry = asyncErrorhandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    const enquiryOne = await enquiryModel.findById( id );
    res.status(201).json({ enquiryOne });
  } catch (error) {
    next(new customError(error.message, 500));
  }
});

exports.getAllEnquiry = asyncErrorhandler(async (req, res, next) => {
  try {
    const enquiryAll = await enquiryModel.find();
    res.status(200).json({ enquiryAll });
  } catch (error) {
    next(new customError(error.message, 500));
  }
});

exports.updateEnquiry = asyncErrorhandler(async (req, res, next) => {
  const { id } = req.params;
  const updatedQuery = await enquiryModel.findByIdAndUpdate(id, req.body, {
    runValidators: true,
    new: true,
  });

  if (!updatedQuery) {
    const error = new customError("Given Id not exist in DB", 404);
    return next(error);
  }

  res.status(200).json({ updatedQuery });
});

exports.deleteEnquiry = asyncErrorhandler(async (req, res, next) => {
  const { id } = req.params;
  try {
    await enquiryModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted" });
  } catch (error) {
    next(new customError(error.message, 500));
  }
});
