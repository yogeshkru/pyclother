module.exports = (app) => {
  const BlogController = require("../controllers/blogController");
  const router = require("express").Router();
  var asyncErrorhandler = require("../utils/asyncErrorhandler");
  const {
    getBlog,
    likeBlog,
    creatBlog,
    deleteBlog,
    getAllBlogs,
    updateBlog,
    disLikeBlog,
  } = new BlogController();

  router.route("/getblog").get(asyncErrorhandler(getBlog));
  router.route("/getall_blog").get(asyncErrorhandler(getAllBlogs));
  router.route("/like_blog").post(asyncErrorhandler(likeBlog));
  router.route("/create_blog").post(asyncErrorhandler(creatBlog));
  router.route("/delete_blog").delete(asyncErrorhandler(deleteBlog));
  router.route("/update_blog").patch(asyncErrorhandler(updateBlog));
  router.route("/dislike_blog").post(asyncErrorhandler(disLikeBlog));

  app.use("/api/blog", router);
};
