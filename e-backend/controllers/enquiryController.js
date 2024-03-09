

const enquiryModel = require("../model/enquiryModel");
const CustomError = require("../utils/customError");

class EnquiryController {
  // Create Enquiry
  async enquiry(req, res, next) {

    
    try {
      let { _id } = req.user

    // const {queryData} = req.body;

    // queryData.user_id = _id
      const newEnquiry = await enquiryModel.create({

        ...req.body,user_id:_id
    });
      res.status(201).json({ newEnquiry });
    } catch (error) {
      next(new CustomError(error.message, 500));
    }
  }

  // Get Single Enquiry
  async getEnquiry(req, res, next) {
    const { id } = req.params;
    try {
      const enquiryOne = await enquiryModel.findById(id);
      res.status(201).json({ enquiryOne });
    } catch (error) {
      next(new CustomError(error.message, 500));
    }
  }

  // Get All Enquiries
  async getAllEnquiry(req, res, next) {
    try {
      const enquiryAll = await enquiryModel.find().populate("user_id")
      res.status(200).json({ enquiryAll });
    } catch (error) {
      next(new CustomError(error.message, 500));
    }
  }

  // Update Enquiry
  async updateEnquiry(req, res, next) {
    const { id } = req.params;
    const updatedQuery = await enquiryModel.findByIdAndUpdate(id, req.body, {
      runValidators: true,
      new: true,
    });

    if (!updatedQuery) {
      const error = new CustomError("Given Id not exist in DB", 404);
      return next(error);
    }

    res.status(200).json({ updatedQuery });
  }

  // Delete Enquiry
  async deleteEnquiry(req, res, next) {
    const { id } = req.params;
    try {
      await enquiryModel.findByIdAndUpdate(id,{isDelete:false});
      res.status(200).json({ message: "Deleted" });
    } catch (error) {
      next(new CustomError(error.message, 500));
    }
  }
}

module.exports = EnquiryController;
