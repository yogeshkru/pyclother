const mongoose=require('mongoose')

const couponSchmea=new mongoose.Schema(
    {
        coupon_name:{
            type:String,
            required:[true,"Coupon is required"],
            uppercase:true
        },
        coupon_expired:{
            type:Date,
            required:[true,"Expired is required"]
        },
        coupon_discount:{
            type:Number,
            required:[true,"Discount is required"]
        },
        isDelete:{
            type:Boolean,
            default:true,
            select:false
        
        },
        
    },{timestamps:true}
)

couponSchmea.pre(/^find/,function(next){
    this.find({isDelete:{$ne:false}})
    next()
})

module.exports = mongoose.model("Tbl_coupons",couponSchmea)