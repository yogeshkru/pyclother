const mongoose=require("mongoose")
const bcrypt=require('bcrypt')

const shopSchema=new mongoose.Schema(
    {
        shop_name:{
            type:String,
            required:[true,"Name is required"]
        },
        shop_email:{
            type:String,
            required:[true,"Email is required"]
        },
        shop_password:{
            type:String,
            required:[true,"Password is required"]
        },
        shop_phone:{
          type:Number,
          required:["Phone number is required"]
        },
        shop_avatar:{
            type:String,

        },
        shop_zipcode:{
            type:String,
            required:[true,"Zipcode is required"]
        },
        shop_role:{
           type:String,
           enum:["admin"],
           default:"admin"
        },
    

    },
    {
        timestamps:true
    }
)
shopSchema.pre("save",async function(next){
    if(!this.isModified("shop_password")) return next()
    this.shop_password=await bcrypt.hash(this.shop_password,14)
})

module.exports=mongoose.model("Tbl_shop",shopModel)