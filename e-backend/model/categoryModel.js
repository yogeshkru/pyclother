const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    category_title: {
      type: String,
    },
    category_description: {
      type: String,
    },
    image: {
      type: [String],
    },

    meta_title: {
      type: String,
    },

    meta_description: {
      type: String,
    },
    meta_keyWord: {
      type: String,
    },
    sort: {
      type: Number,
    },
    isDelete: {
      type: Boolean,
      default: true,
      select:false
    },
  },
  { timestamps: true }
);
categorySchema.pre(/^find/,function(next){
  this.find({isDelete:{$ne:false}})
  next()
})

module.exports = mongoose.model("Tbl_category", categorySchema);
