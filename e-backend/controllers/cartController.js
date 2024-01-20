const { default: mongoose } = require("mongoose");
const cartModel = require("../model/cartModel");
const asyncErrorhandler = require("../utils/asyncErrorhandler");
const customError = require("../utils/customError");


exports.cart =  asyncErrorhandler(async(req,res,next) =>{
    const {cart_product_product_Id,cart_color_color_Id,cart_price,cart_quantity} = req.body;
    const { _id } = req.user || {};
   
    // validateMongoDbId(_id);
    try {
      const newCart = await cartModel.create({
        cart_user_user_Id:_id,
        cart_product_product_Id,
        cart_color_color_Id,
        cart_price,
        cart_quantity,
      })
      res.status(200).json({newCart})
    //   console.log(req.body,"dhfgvuwgfyywtefg")
      console.log(newCart,"egugwqeiuyggfwiuftgiuwgt");
    } catch (error) {
        next(new customError(error.message,500))
    }
})



exports.deleteItemCart = asyncErrorhandler(async(req,res,next)=>{
    const {_id} = req.user;
    const {cart_Id}=req.params;
    validateMongoDbId(_id);
    try {
const removeProduct = await cartModel.deleteOne({
  userId:_id,
  cart_Id:cart_Id,
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
            cart_user_user_Id:new mongoose.Types.ObjectId(_id)
        }
    },
    {
        $lookup:{
            from: "tbl_Product", 
           localField:"cart_product_product_Id",
           foreignField:"_id",
           as:"productId"  
        },
    },
    {
        $lookup:{
            from:"tbl_Color",
            localField:"cart_color_color_Id",
            foreignField:"_id",
            as:"color",
        },
    },
   ]);
   res.status(200).json({cart})
})