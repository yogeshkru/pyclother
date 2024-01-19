const mongoose=require('mongoose')

const categorySchema=new mongoose.Schema(
    {
        category_title:{
            type:String,
            required:[true,"Category is required"]
        }
    }
)

module.exports=mongoose.model("Tbl_category",categorySchema)