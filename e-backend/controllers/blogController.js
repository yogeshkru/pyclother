const blogModel = require("../model/blogModel");
const CustomError = require("../utils/customError");
const mongoose = require("mongoose");
const fs = require("fs");

class Blog {
  async creatBlog(req, res) {
    const newBlog = await blogModel.create(req.body);
    res.status(200).json({ status: "success", newBlog });
  }
// ***********************************************************
  updateBlog = async (req, res) => {
    const patchedBlog = await blogModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({ patchedBlog });
  };
// ***********************************************************
  getBlog = async function (req, res) {
    const { id } = req.params;

    const getBlog = await blogModel.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(id) } },
      {
        $lookup: {
          from: "tbl_users",
          localField: "blog_likes",
          foreignField: "_id",
          as: "likes",
        },
      },
      {
        $lookup: {
          from: "tbl_users",
          localField: "blog_dislikes",
          foreignField: "_id",
          as: "dislikes",
        },
      },
    ]);

    await blogModel.findByIdAndUpdate(
      id,
      { $inc: { numViews: 1 } },
      { new: true }
    );

    res.status(200).json({ data: getBlog[0] });
  };
//   **************************************************************

  getAllBlogs = async (req, res) => {
    const getBlogs = await blogModel.find();
    res.status(200).json({ getBlogs });
  };
//   **************************************************************

  async deleteBlog(res, req, next) {
    const deleteBlog = await blogModel.findByIdAndDelete(req.params.id);

    if (!deleteBlog) {
      const error = new CustomError("Blog not found", 404);
      return next(error);
    }

    res.status(200).json({ status: "Deleted" });
  }
  //   ******************************************************************

  async likeBlog(req, res) {
    const { blogId } = req.body;

    const blog = await blogModel.findById(blogId);

    const loginUserId = req.user?._id;

    const isLiked = blog?.blog_isLiked;

    const alreadyDisliked = blog.blog_dislikes.find(
      (userId) => userId.toString() === loginUserId.toString()
    );

    if (alreadyDisliked) {
      await blogModel.findByIdAndUpdate(
        blogId,
        { $pull: { blog_dislikes: loginUserId } },
        { new: true }
      );
    }

    if (isLiked) {
      const blog = await blogModel.findByIdAndUpdate(
        blogId,
        {
          $pull: { blog_likes: loginUserId, blog_isLiked: false },
        },
        { new: true }
      );
      return res.status(200).json({ blog });
    } else {
      const blog = await blogModel.findByIdAndUpdate(
        blogId,
        {
          $push: { blog_likes: loginUserId },
          blog_isLiked: true,
        },
        { new: true }
      );
      return res.status(200).json({ blog });
    }
  }

  // *********************************************************************
  async disLikeBlog() {
    const { blogId } = req.body;

    const blog = await blogModel.findById(blogId);

    const loginUserId = req.user?._id;
    const isDisliked = blog?.blog_isDisLiked;

    const alreadyliked = blog?.blog_likes.find(
      (user_id) => user_id.toString() === loginUserId.toString()
    );

    if (alreadyliked) {
      await blogModel.findByIdAndUpdate(
        blogId,
        { $pull: { blog_likes: loginUserId } },
        { new: true }
      );
    }

    if (isDisliked) {
      const blog = await blogModel.findByIdAndUpdate(
        blogId,
        {
          $pull: { blog_dislikes: loginUserId },
          blog_dislikes: false,
        },
        { new: true }
      );
      return res.status(200).json({ blog });
    } else {
      const blog = await blogModel.findByIdAndUpdate(
        blogId,
        { $push: { blog_dislikes: loginUserId }, blog_isDisLiked: true },
        { new: true }
      );
      return res.status(200).json({ blog });
    }
  }
}

module.exports = Blog;
