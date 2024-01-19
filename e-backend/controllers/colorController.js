const colorSchema = require('../model/colorModel')
const asyncErrorhandler = require('../utils/asyncErrorhandler')
const customError = require('../utils/customError')


//create
const colorCreate = asyncErrorhandler(async (req, res, next) => {
    try {
        const colorAlready=await colorSchema.findOne({color:req.body.color_title})
        if(colorAlready){
            return res.status(409).json({message:"color is already exists",colorAlready})
        }
        const { color_title } = req.body
        let createColor = await colorSchema.create({ color_title })
        res.status(200).json({ createColor })
    }
    catch (err) {
        return next(new customError(err.message, 500))
    }


})

//get

const colorGet=asyncErrorhandler(async(req,res,next)=>{
   try{
    const colorAllget=await colorSchema.find()
    res.status(200).json({colorAllget})
   }catch(err){
     return next(new customError(err.message,500))
   }


})

//update

const colorUpdate=asyncErrorhandler(async(req,res,next)=>{
    try{
     const colorUpdateOne=await colorSchema.findByIdAndUpdate(req.params.id,req.body,{runValidators:true,new:true})
     if(!colorUpdateOne){
        return next(new customError("Given id is not exists",409))
     }
     res.status(200).json({colorUpdateOne})
    
    }catch(err){
      return next(new customError(err.message,500))
    }
})


//delete
const colorDelete = asyncErrorhandler(async (req, res, next) => {
    try {
        await colorSchema.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"deleted"});
    } catch (err) {
        return next(new customError(err.message, 500));
    }
});

//findOne
const colorfindone=asyncErrorhandler(async(req,res,next)=>{
    try{
        const colorfind=await colorSchema.findById(req.params.id)
        res.status(200).json({colorfind})
    }catch(err){
       return next(new customError(err.message,500))
    }
})



module.exports = { colorCreate,colorGet,colorUpdate,colorDelete,colorfindone };


