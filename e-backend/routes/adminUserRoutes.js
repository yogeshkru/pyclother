module.exports = (app) => {
  const router = require("express").Router();
  const {
    createNewUser,
    activation,
    login,
    getUserById,
    fetchAllUser,
    blockUser,
    unblockUser,
    logout,
    resetPassword,
    updateMe,
    updatePassword,
    deleteMe,
  } = require("../controllers/adminUserController");
  const { shopProtect, restrict, adminUser } = require("../middleware/auth");

  router.route("/activate/:activation_token").post(activation);
  router.route("/admin-login").post(login);
  router.route("/admin-reset-password/:token").post(resetPassword);

  // ************************* authorized user**********************

  router.route("/admin-updateme").patch(adminUser, updateMe);
  router.route("/admin-updatepassword").patch(adminUser, updatePassword);
  router.route("/admin-delete-me").delete(adminUser, deleteMe);
  router.route("/admin-logout").get(logout);

  //   *********************protect and roles Url's***********************
  router
    .route("/creatuser")
    .post(shopProtect, restrict("shop admin", "super admin"), createNewUser);

  router
    .route("/getalluser")
    .get(shopProtect, restrict("shop admin", "super admin"), fetchAllUser);

  // ***************These url's only manipulate by super admin*************************
  router
    .route("/getuser/:id")
    .get(shopProtect, restrict("super admin"), getUserById);
  router
    .route("/block-user/:id")
    .patch(shopProtect, restrict("super admin"), blockUser);
  router
    .route("/unblock/:id")
    .patch(shopProtect, restrict("super admin"), unblockUser);

  app.use("/api/admin", router);
};
