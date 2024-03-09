const gstModel = require("../model/gstModel");
const asyncErrorHandler = require("../utils/asyncErrorhandler")
const CustomError = require("../utils/customError");

exports.createGst = asyncErrorHandler(async (req, res, next) => {
    // const HSNAlready = await gstModel.findOne({ gst_hsn_code: req.body.gst_hsn_code });
    // if (!HSNAlready) {
    //     return next(new CustomError("HSN Code is already exists", 409));
    // }

   


    
    const { HSN_code, Gst } = req.body;
     
    try {
        const handleCreate = await gstModel.create({
            gst_hsn_code: HSN_code,
            gst_percentage: Gst,
           
        });
       
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
      await gstModel.findByIdAndUpdate(id,{isdeleted:false});
      res.status(200).json({ message: "Deleted", });
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
            Object.assign({},{gst_hsn_code:req.body.HSN_code,gst_percentage:req.body.Gst}),
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



