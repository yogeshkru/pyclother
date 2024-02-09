const privacyPolicySchema=require("../model/privacypolicyModel")
const customError = require("../utils/customError");
class PrivacypolicyController{

    async privacypolicyPost(req,res,next){
       try{
          let privacy=await privacyPolicySchema.create(req.body)
          res.status(200).json({privacy})
       }catch(err){
          return next(new customError(err.message,500))
       }
    }

    async privarypolicyGet(req,res,next){
        try{
           let getprivacy=await privacyPolicySchema.find()
           res.status(200).json({getprivacy})
        }catch(err){
            return next(new customError(err.message,500))
        }
    }
}

module.exports=PrivacypolicyController;