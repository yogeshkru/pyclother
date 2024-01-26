const addressModel = require("../model/addressModel");
const CustomError = require("../utils/customError");

class Addressdetails {
  //post
  addressCreate = async (req, res, next) => {
    try {
      const {
        address_area,
        address_city,
        address_state,
        adddress_country,
        address_pincode,
      } = req.body;
      const addressCreate = await addressModel.create({
        address_area,
        address_city,
        address_state,
        adddress_country,
        address_pincode,
      });
      res.status(200).json({ addressCreate });
    } catch (err) {
      return next(new CustomError(err.message, 500));
    }
  };
  
  //get
  addressGet=async(req,res,next)=>{
    try{
      const addressallget=await addressModel.find()
      res.status(200).json({addressallget})
    }catch(err){
       next(new CustomError(err.message,500))
    }

  }

  //update
  addressUpdate=async(req,res,next)=>{
       try{
          const addressPut=await addressModel.findByIdAndUpdate(req.params.id,req.body,{runValidators:true,new:true})
       
          if(!addressPut){
            return next(new CustomError("The give id is not found",404))
          }
          res.status(200).json({addressPut})
          
       }catch(err){
           return next(new CustomError(err.message,500))
       }
  }

  //delete
  addressDelete=async function (req,res,next) {
    try{
       await addressModel.findByIdAndDelete(req.params.id)
       res.status(204).json({message:"deleted"})
    }catch(err){
         return next(new CustomError(err.message,500))
    }
    
  }

  //findone
  addressfind=async(req,res,next)=>{
    try{
        const addressFind=await addressModel.findById(req.params.id)
        if(!addressFind){
          return next(new CustomError("The give id is not found",404))
        }
        res.status(200).json({addressFind})
    }catch(err){
         return next(new CustomError(err.message,500))
    } 
  }

}

module.exports = Addressdetails;
