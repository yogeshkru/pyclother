module.exports = (app) => {
  const router = require("express").Router();
  const AdminUserController = require("../controllers/adminUserController");
  const asyncErrorhandler = require("../utils/asyncErrorhandler");
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
  } = new AdminUserController();
  const { shopProtect, restrict, adminUser } = require("../middleware/auth");

  router
    .route("/activate/:activation_token")
    .post(asyncErrorhandler(activation));
  router.route("/admin-login").post(asyncErrorhandler(login));
  router
    .route("/admin-reset-password/:token")
    .post(asyncErrorhandler(resetPassword));

  // ************************* authorized user**********************

  router.route("/admin-updateme").patch(adminUser, asyncErrorhandler(updateMe));
  router
    .route("/admin-updatepassword")
    .patch(adminUser, asyncErrorhandler(updatePassword));
  router
    .route("/admin-delete-me")
    .delete(adminUser, asyncErrorhandler(deleteMe));
  router.route("/admin-logout").get(asyncErrorhandler(logout));

  //   *********************protect and roles Url's***********************
  router
    .route("/creatuser")
    .post(
      shopProtect,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(createNewUser)
    );

  router
    .route("/getalluser")
    .get(
      shopProtect,
      restrict("shop admin", "super admin"),
      asyncErrorhandler(fetchAllUser)
    );

  // ***************These url's only manipulate by super admin*************************
  router
    .route("/getuser/:id")
    .get(shopProtect, restrict("super admin"), asyncErrorhandler(getUserById));
  router
    .route("/block-user/:id")
    .patch(shopProtect, restrict("super admin"), asyncErrorhandler(blockUser));
  router
    .route("/unblock/:id")
    .patch(
      shopProtect,
      restrict("super admin"),
      asyncErrorhandler(unblockUser)
    );

  app.use("/api/admin", router);
};
