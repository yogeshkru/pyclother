const gstModel = require("../model/gstModel");
const asyncErrorHandler = require("../utils/asyncErrorHandler");
const CustomError = require("../utils/customError");

exports.createGst = asyncErrorHandler(async (req, res, next) => {
    const HSNAlready = await gstModel.findOne({ gst_hsn_code: req.body.Hsncode });
    if (HSNAlready) {
        return next(new CustomError("HSN Code is already exists", 409));
    }

    const { Hsncode, gst } = req.body;

    try {
        const handleCreate = await gstModel.create({
            gst_hsn_code: Hsncode,
            gst_percentage: gst
        });
        res.status(200).json({ handleCreate });
    } catch (error) {
        next(new CustomError(error.message, 500));
    }
});
