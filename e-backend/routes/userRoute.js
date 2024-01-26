module.exports = (app) => {
  const router = require("express").Router();
  const { userProtect, restrict } = require("../middleware/auth");
  const UserController = require("../controllers/userController");
  const asyncErrorhandler = require("../utils/asyncErrorhandler");
  const {
    createUser,
    login,
    forgetPassword,
    resetPassword,
    updateMe,
    fetchAllUser,
    unblockUser,
    blockUser,
    deleteMe,
    getUserById,
    getUserDelete,
    getWishList,

    updatePasswordByUserLogin,
  } = new UserController();

  // urls without protect

  router.route("/createUser").post(asyncErrorhandler(createUser));
  router.route("/login").post(asyncErrorhandler(login));
  router.route("/forgot").post(asyncErrorhandler(forgetPassword));
  router.route("/reset/:token").patch(asyncErrorhandler(resetPassword));

  // the below url update by authorized user;

  router.route("/update-user").patch(userProtect, asyncErrorhandler(updateMe));
  router.route("/deleteme").patch(userProtect, asyncErrorhandler(deleteMe));
  router.route("/getwishlist").get(userProtect, asyncErrorhandler(getWishList));
  router
    .route("/updatePassword")
    .patch(userProtect, asyncErrorhandler(updatePasswordByUserLogin));

  // the below urt's will manipulate by admin's

  router
    .route("/getuser/:id")
    .get(userProtect, restrict("super admin"), asyncErrorhandler(getUserById));
  router
    .route("/block-user")
    .patch(userProtect, restrict("super admin"), asyncErrorhandler(blockUser));
  router
    .route("/unblock-user")
    .patch(
      userProtect,
      restrict("super admin"),
      asyncErrorhandler(unblockUser)
    );
  router
    .route("/deleteuser/:id")
    .delete(
      userProtect,
      restrict("super admin"),
      asyncErrorhandler(getUserDelete)
    );
  router
    .route("/fetchuser")
    .get(userProtect, restrict("super admin"), asyncErrorhandler(fetchAllUser));
  router
    .route("/deleteuser/:id")
    .delete(
      userProtect,
      restrict("super admin"),
      asyncErrorhandler(getUserDelete)
    );

  app.use("/api/user", router);
};
