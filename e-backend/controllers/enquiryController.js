const { default: mongoose } = require("mongoose");
const enquiryModel = require("../model/enquiryModel");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const customError = require("../utils/customError");


exports.enquiry = asyncErrorhandler(async(req,res,next)=>{
    const { enquiry_name,enquiry_email, enquiry_mobile,  enquiry_comment, enquiry_status} = req.body;
    try {
        const newEnquiry = await enquiryModel.create({
            enquiry_name,enquiry_email, enquiry_mobile,  enquiry_comment, enquiry_status
        });
        res.status(201).json({newEnquiry})
    } catch (error) {
        next(new customError(error.message,500))
    }
})


exports.getEnquiry = asyncErrorhandler(async(req,res,next)=>{
    const {id}=req.params;
    try {
        const enquiryOne = await enquiryModel.findOne({where:{_id:id}})
        res.status(201).json({enquiryOne})
    } catch (error) {
        next(new customError(error.message,500))
    }
})

exports.getAllEnquiry = asyncErrorhandler(async(req,res,next)=>{
try {
    const enquiryAll = await enquiryModel.findAll();
    res.status(201).json({enquiryAll})
} catch (error) {
    next(new customError(error.message,500))
}
})

exports.deleteEnquiry =asyncErrorhandler(async(req,res,next)=>{
    const{id}=req.params;
    try {
        const delEnquiry = await enquiryModel.destory({where:{_id:id}});
        res.status(201).json({delEnquiry})
    } catch (error) {
        next(new customError(error.message,500))  
    }
})