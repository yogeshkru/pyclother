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

  router.route("/getblog/:id").get(asyncErrorhandler(getBlog));
  router.route("/getall-blog").get(asyncErrorhandler(getAllBlogs));
  router.route("/like-blog").post(asyncErrorhandler(likeBlog));
  router.route("/create-blog").post(asyncErrorhandler(creatBlog));
  router.route("/delete-blog/:id").delete(asyncErrorhandler(deleteBlog));
  router.route("/update-blog/:id").patch(asyncErrorhandler(updateBlog));
  router.route("/dislike-blog").post(asyncErrorhandler(disLikeBlog));

  app.use("/api/blog", router);
};
