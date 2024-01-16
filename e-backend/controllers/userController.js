const userModel=require('../model/userModel')
const jwt=require('jsonwebtoken')
const asyncErrorhandler=require('../utils/asyncErrorhandler')
const customError=require('../utils/customError')
//inbuild module
const crypto=require('crypto')
const util=require('util')

//Token generate
const generateToken=(id)=>{
    return jwt.sign({id},process.env.SECERT_STRING,{
        expiresIn:process.env.EXPIRE_DAYS,
    })
}

exports.createUser=asyncErrorhandler(async(req,res,next)=>{
    try{
      const user=await userModel.create(req.body);
      const token=generateToken(user._id)
      res.status(201).json({status:'success',user_details:{
        id:user._id,
        name:user.name,
        email:user.email,
        phone:user.phone,
      },token})
    }catch(err){
         return next(new customError(err.message,400))
    }
})
