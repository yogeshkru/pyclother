module.exports = (app) => {
  const router = require("express").Router();
  const { authenticateUser, restrict } = require("../middleware/auth");
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
    deleteUser,
    getWishList,
    userProfile,
    getAllUser,

    updatePasswordByUserLogin,
  } = new UserController();

  // urls without protect

  router.route("/createUser").post(asyncErrorhandler(createUser));
  router.route("/login").post(asyncErrorhandler(login));
  router.route("/forgot").post(asyncErrorhandler(forgetPassword));
  router.route("/reset/:token").patch(asyncErrorhandler(resetPassword));
  router.route("/getall-user").get(asyncErrorhandler(getAllUser))

  // the below url update by authorized user;

  router.route("/get-profile").get(authenticateUser,asyncErrorhandler(userProfile))
  router
    .route("/update-user")
    .patch(authenticateUser, asyncErrorhandler(updateMe));
  router
    .route("/deleteme")
    .patch(authenticateUser, asyncErrorhandler(deleteMe));
  router
    .route("/getwishlist")
    .get(authenticateUser, asyncErrorhandler(getWishList));
  router
    .route("/updatePassword")
    .patch(authenticateUser, asyncErrorhandler(updatePasswordByUserLogin));

  // the below urt's will manipulate by admin's

  router
    .route("/getuser/:id")
    .get(
      authenticateUser,
      restrict("super admin"),
      asyncErrorhandler(getUserById)
    );
  router
    .route("/block-user/:id")
    .patch(
      authenticateUser,
      restrict("super admin"),
      asyncErrorhandler(blockUser)
    );
  router
    .route("/unblock-user/:id")
    .patch(
      authenticateUser,
      restrict("super admin"),
      asyncErrorhandler(unblockUser)
    );
  router
    .route("/deleteuser/:id")
    .delete(
      authenticateUser,
      restrict("super admin"),
      asyncErrorhandler(deleteUser)
    );
  router
    .route("/fetchuser")
    .get(
      authenticateUser,
      restrict("super admin"),
      asyncErrorhandler(fetchAllUser)
    );
 

  app.use("/api/user", router);
};
