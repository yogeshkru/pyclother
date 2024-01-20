module.exports = (app) => {
  const router = require("express").Router();
  const {
    createNewUser,
    activation,
    getUserById,
    fetchAllUser,
    blockUser,
    unblockUser,
    logout,
  } = require("../controllers/adminUserController");
  const { adminProtect, restrict } = require("../middleware/auth");

  router.route("/creatuser").post(createNewUser);
  router.route("/activate/:activation_token").post(activation);
  router.route("/getalluser").get(fetchAllUser);

  // ************************* authorized user**********************

  router.route("/logout").get(adminProtect, logout);

  //   *********************protect and roles Url's***********************
  router
    .route("/getuser/:id")
    .get(adminProtect, restrict("super admin"), getUserById);
  router
    .route("/block-user/:id")
    .patch(adminProtect, restrict("super admin"), blockUser);
  router
    .route("/unblock/:id")
    .patch(adminProtect, restrict("super admin"), unblockUser);

  app.use("/api/admin", router);
};
