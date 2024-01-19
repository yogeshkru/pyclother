const colorSchema = require('../model/colorModel')
const asyncErrorhandler = require('../utils/asyncErrorhandler')
const customError = require('../utils/customError')


//create
const colorCreate = asyncErrorhandler(async (req, res, next) => {
    try {
        const colorAlready=await colorSchema.findOne({color:req.body.color})
        if(colorAlready){
            return res.status(409).json({message:"color is already exists",colorAlready})
        }
        const { color } = req.body
        let createColor = await colorSchema.create({ color })
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
    res.status(200).json(colorAllget)
   }catch(err){
     return next(new customError(err.message,500))
   }


})

//update

const colorUpdate=asyncErrorhandler(async(req,res,next)=>{
    try{
     const colorUpdateOne=await colorSchema.findByIdAndUpdate(req.params.id,req.body,{runValidators:true,new:true})
     res.status(200).json(colorUpdateOne)
    
    }catch(err){
      return next(new customError(err.message,500))
    }
})


//delete
const colorDelete = asyncErrorhandler(async (req, res, next) => {
    try {
        const colorDeletes = await colorSchema.findByIdAndDelete(req.params.id);
        res.status(200).json(colorDeletes);
    } catch (err) {
        return next(new customError(err.message, 500));
    }
});



module.exports = { colorCreate,colorGet,colorUpdate,colorDelete };


