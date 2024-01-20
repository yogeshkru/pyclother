module.exports = (app) => {
  const BlogController = require("../controllers/blogController");
  const router = require("express").Router();
  const {
    getBlog,
    likeBlog,
    creatBlog,
    deleteBlog,
    getAllBlogs,
    updateBlog,
    disLikeBlog,
  } = new BlogController();

  router.route("/getblog").get(getBlog);
  router.route("/getall_blog").get(getAllBlogs)
  router.route("/like_blog").post(likeBlog)
  router.route("/create_blog").post(creatBlog);
  router.route("/delete_blog").delete(deleteBlog)
  router.route("/update_blog").patch(updateBlog)
  router.route("/dislike_blog").post(disLikeBlog)

  app.use("/api/brand",router)
};
