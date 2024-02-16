const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    user_id:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Tbl_user"
    },
    enquiry_comment: {
      type: String,
    },
    enquiry_status: {
      type: String,
      default: "Submitted",
      enum: {
        values: ["Submitted", "Contacted", "In Progress", "Resolved"],
      },
    },
    isDelete:{
      type:Boolean,
      default:true
  
  },
  
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tbl_enquiry", enquirySchema);
