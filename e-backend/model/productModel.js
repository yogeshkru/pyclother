const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      required: true,
    },
    images: [],
    color: [{ type: mongoose.Schema.Types.ObjectId, ref: "Color" }],
    ratings: [
      {
        star: Number,
        comment: String,
        postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      },
    ],
    totalrating: {
      type: String,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    Available: { type: Boolean, default: true },
    // companyId:{},
    // branchId:{}
    size: String,

    sku: String,
    tags: String,
  },

  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
