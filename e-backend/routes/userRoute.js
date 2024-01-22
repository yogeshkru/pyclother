module.exports = (app) => {
  const router = require("express").Router();
  const { userProtect, restrict } = require("../middleware/auth");
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
  } = require("../controllers/userController");

  // urls without protect

  router.route("/createUser").post(createUser);
  router.route("/login").post(login);
  router.route("/forgot").post(forgetPassword);
  router.route("/reset/:token").patch(resetPassword);
  router.route("/deleteuser/:id").delete(getUserDelete);
  router.route("/fetchuser").get(fetchAllUser);

  // the below url update by authorized user;

  router.route("/update-user").patch(userProtect, updateMe);
  router.route("/deleteme").patch(userProtect, deleteMe);
  router.route("/getuser/:id").get(userProtect, getUserById);
  router.route("/getwishlist").get(userProtect, getWishList);
  router.route("/updatePassword").patch(userProtect, updatePasswordByUserLogin);

  // the below urt's will manipulate by admin's

  router
    .route("/block-user")
    .patch(userProtect, restrict("super admin"), blockUser);
  router
    .route("/unblock-user")
    .patch(userProtect, restrict("super admin"), unblockUser);

  app.use("/api/user", router);
};
