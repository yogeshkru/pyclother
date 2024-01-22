const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema(
  {
    enquiry_name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    enquiry_email: {
      type: String,
      required: [true, "Email is required"],
    },
    enquiry_mobile: {
      type: Number,
      required: [true, "Phone is required"],
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tbl_enquiry", enquirySchema);
