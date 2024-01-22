
const shopModel=require('../model/shopModel')
const CustomError=require('../utils/customError')
const {sendShopToken}=require('../utils/jwtToken')

class Shop{
    

    //Post
    async shopCreate(req,res,next){
       try{
        const shopAlready=await shopModel.findOne({shop_email:req.body.shop_email})
        if(shopAlready){
            return next(new CustomError("Shop email is already exists",409))
        }
          let shopes=await shopModel.create(req.body)
                // shopes.shop_password=undefined

        //   res.status(200).json({shopes})
          shopes={
            _id:shopes._id,
            shop_name:shopes.shop_name,
            shop_email:shopes.shop_email,
            shop_phone:shopes.shop_phone,
            shop_avatar:shopes.shop_avatar,
            shop_zipcode:shopes.shop_zipcode,
            shop_role:shopes.shop_role

          }

          
        return await  sendShopToken(shopes,201,res)

       }catch(err){
          return next(new CustomError(err.message,409))
       }
   
    }

    
}

module.exports= Shop


