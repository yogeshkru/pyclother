const mongoose = require("mongoose");

let blogSchema = new mongoose.Schema(
  {
    blog_title: {
      type: String,
      required: [true, "Title is required field"],
    },
    blog_description: {
      type: String,
      required: [true, "description is required field"],
    },
    blog_category: {
      type: String,
      required: [true, "Category is required field"],
    },
    numViews: {
      type: Number,
      default: 0,
    },
    blog_isLiked: {
      type: Boolean,
      default: false,
    },
    blog_isDisLiked: {
      type: Boolean,
      default: false,
    },
    blog_likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tbl_user" }],
    blog_dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tbl_user" }],
    blog_images: {
      type: Array,
    },
    blog_author: {
      type: String,
      default: "Admin",
    },
    isDelete:{
      type:Boolean,
      default:true,
      select:false
  
  },
  
  
  },
  { timestamps: true }
);
blogSchema.pre(/^find/,function(next){
  this.find({isDelete:{$ne:false}})
  next()
})

module.exports = mongoose.model("Tbl_blog", blogSchema);
