
const shopModel=require('../model/shopModel')
const CustomError=require('../utils/customError')

class Shop{
    
    async shopCreate(req,res,next){
       try{
        const shopAlready=await shopModel.findOne({shop_email:req.body.shop_email})
        if(shopAlready){
            return next(new CustomError("Shop email is already exists",409))
        }
          const shop=await shopModel.create(req.body)
          res.status(200).json({shop})
       }catch(err){
          return next(new CustomError(err.message,409))
       }
   
    }
}

module.exports= Shop


