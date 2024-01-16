const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const crypto=require('crypto')
const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,'name is required'],
            trim:true
        },
        email:{
            type:String,
            required:[true,"Email is required"],
         
        },
        phone:{
            type:Number,
            required:[true,"Phone is required"]
        },
        password:{
            type:String,
            required:[true,"Password is required"],
            select:false

        },
        wishlist:[{type:mongoose.Schema.Types.ObjectId,ref:"Product"}],
        passwordChangedAt:Date,
        passwordResetToken:String,
        passwordResetTokenExpired:Date
    },
    {
        timestamps:true
    }
)
userSchema.pre("save",async function (next){
    if(!this.isModified('password')) return next();
    this.password=await bcrypt.hash(this.password,14)
})
module.exports=mongoose.model('User',userSchema)