const mongoose = require("mongoose");

const GSTSchema = new mongoose.Schema({

    gst_hsn_code:{
        type:Number,
        require:[true, "hsn is required" ]
    },
    gst_percentage:{
        type:String,
        require:[true,"percentage is required"]
    },
    isdeleted:{
        type:Boolean,
        default:0
    }
})
module.exports = mongoose.model("Tbl_gst", GSTSchema);