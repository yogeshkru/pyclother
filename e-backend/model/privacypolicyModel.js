const mongoose=require('mongoose')


const privacyPolicySchema=new mongoose.Schema(
    {
        privary_policy:{
            type:String,
            required:[true,"Privary Policy is Required"]
        },
        isDelete:{
            type:Boolean,
            default:true
        
        },
        
    }
    ,{timestamps:true}
)

module.exports=mongoose.model("Tbl_privacy",privacyPolicySchema)