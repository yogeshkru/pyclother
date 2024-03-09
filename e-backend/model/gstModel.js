const mongoose = require("mongoose");

const GSTSchema = new mongoose.Schema({

    gst_hsn_code:{
        type:String,
        require:[true, "hsn is required" ]
    },
    gst_percentage:{
        type:String,
        require:[true,"percentage is required"]
    },
    isdeleted:{
        type:Boolean,
        default:true,
        select:false
    }

})
GSTSchema.pre(/^find/,function(next){
    this.find({isdeleted:{$ne:false}})
    next()
})
module.exports = mongoose.model("Tbl_gst", GSTSchema);