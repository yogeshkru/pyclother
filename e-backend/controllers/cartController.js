const { default: mongoose } = require("mongoose");
const cartModel = require("../model/cartModel");
const { create } = require("../model/userModel");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const customError = require("../utils/customError");


exports.cart =  asyncErrorhandler(async(req,res,next) =>{
    const {productId,colorId,price,quantity} = req.body;
    const {_id}=req.user;
    validateMongoDbId(_id);
    try {
      const newCart = await cartModel.create({
        userId:_id,
        productId,
        colorId,
        price,
        quantity,
      }).save();
      res.status(200).json({newCart})
    } catch (error) {
        next(new customError(error.message,500))
    }
})

exports.updateItemCart =  asyncErrorhandler(async(req,res,next) =>{
    const {id,quantity} = req.params;
    const {_id}=req.user;
    validateMongoDbId(_id);
    try {
      const existingCartItem = await cartModel.findOne({
        userId:_id,
        id,
      
      });
      if(existingCartItem){
        existingCartItem.quantity += quantity;
        await existingCartItem.save();
      }
      res.status(200).json({newCart})
    } catch (error) {
        
    }
});

exports.deleteItemCart = asyncErrorhandler(async(req,res,next)=>{
    const {_id} = req.user;
    const {id}=req.params;
    validateMongoDbId(_id);
    try {
const removeProduct = await cartModel.deleteOne({
  userId:_id,
  _id:id,
});
if(!removeProduct){

    res.status(404).json({message:"product not found in cart"})
} else{
    res.status(200).json({message:"Product removed from cart"})
}
    } catch (error) {
        next(new customError(error.message,500))
    }
})

exports.getUserCart=asyncErrorhandler(async(req,res,next)=>{
   const {_id} = req.user;
   validateMongoDbId(_id);
   const cart = await cartModel.aggregate([
    {
        $match:{
            userId:new mongoose.Types.ObjectId(_id)
        }
    },
    {
        $lookup:{
           from:"products",
           localField:"productId",
           foreignField:"_id",
           as:"productId"  
        },
    },
    {
        $lookup:{
            from:"colors",
            localField:"color",
            foreignField:"_id",
            as:"color",
        },
    },
   ]);
   res.status(200).json({cart})
})