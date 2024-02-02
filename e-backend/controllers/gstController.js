const gstModel = require("../model/gstModel");
const asyncErrorHandler = require("../utils/asyncErrorHandler");
const CustomError = require("../utils/customError");

exports.createGst = asyncErrorHandler(async (req, res, next) => {
    console.log('Received HSN Code:', req.body);

    // const HSNAlready = await gstModel.findOne({ gst_hsn_code: req.body.Hsncode });

    // console.log('Existing HSN Code:', HSNAlready);
    
    const { HSN_code, Gst } = req.body;
     
    try {
        const handleCreate = await gstModel.create({
            gst_hsn_code: HSN_code,
            gst_percentage: Gst,
           
        });
       
        console.log(handleCreate,"create")
        res.status(200).json({ handleCreate });
    } catch (error) {
        next(new CustomError(error.message, 500));
    }
});

exports.getgst = asyncErrorHandler(async(req,res,next)=>{
    try {
        const gstall = await gstModel.find();
        if(!gstall){
            return res.status(404).json({
                status: 404,
                message: "gst not found",
            });
        } res.status(200).json({gstall})
    } catch (error) {
        next(new CustomError(error.message, 500)); 
    }
});

exports.deletegst = asyncErrorHandler(async(req,res,next)=>{
    const { id } = req.params;
    try {
      await gstModel.findByIdAndDelete(id);
      res.status(200).json({ message: "Deleted" });
    } catch (error) {
      next(new CustomError(error.message, 500));
    }
});

exports.getonegst = asyncErrorHandler(async(req,res,next)=>{
    const { id } = req.params;
    try {
        const gstone = await gstModel.findById(id);
        if(!gstone){
            return res.status(404).json({
                status: 404,
                message: "gst not found",
            });
        } res.status(200).json({gstone})
    } catch (error) {
        next(new CustomError(error.message, 500)); 
    }
});


exports.updategst = asyncErrorHandler(async(req,res,next)=>{
  
    try {
        const gstpatch = await gstModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { runValidators: true, new: true }
          );
    
        if(!gstpatch){
            return res.status(404).json({
                status: 404,
                message: "can't update gst",
            });
        } res.status(200).json({gstpatch})
    } catch (error) {
        next(new CustomError(error.message, 500)); 
    }
});



