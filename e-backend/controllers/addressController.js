const addressModel=require("../model/addressModel")
const customError=require("../utils/customError")

class Addressdetails{
    //post
    addressCreate=async(req,res,next)=>{
        try{
            const{address_area,address_city,address_state,adddress_country,address_pincode}=req.body
            const addressCreate= await addressModel.create({address_area,address_city,address_state,adddress_country,address_pincode})
            res.status(200).json({addressCreate})
        }catch(err){
             return next(new customError(err.message,500))
        }
    }
}

module.exports=Addressdetails