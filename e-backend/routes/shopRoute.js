module.exports = (app) => {
  const Shop = require("../controllers/shopController");
  const router = require("express").Router();
  const asyncErrorHandler = require("../utils/asyncErrorhandler");
  const { shopProtect, restrict } = require("../middleware/auth");
  const {
    shopCreate,
    fetchAllShop,
    unblockUser,
    updateMe,
    updatePasswordByLogin,
    blockUser,
    deleteMe,
    getUserById,
    getUserDelete,
    shoplogout,
    shopLogin,
    shopForget,
    shopResetPassword,
  } = new Shop();

  // without using authorization
  router.route("/login-shop").post(asyncErrorHandler(shopLogin));
  router.route("/update-shop-forgot").post(asyncErrorHandler(shopForget));
  router
    .route("/patch-shop/:token")
    .patch(asyncErrorHandler(shopResetPassword));
  router.route("/create-shop").post(asyncErrorHandler(shopCreate));

  // with authorization

  router.route("/update-shop").patch(shopProtect, asyncErrorHandler(updateMe));
  router
    .route("/update-shopassword")
    .patch(shopProtect, asyncErrorHandler(updatePasswordByLogin));
  router.route("/delete-shop").delete(shopProtect, asyncErrorHandler(deleteMe));
  router
    .route("/shop-delete/:id")
    .delete(shopProtect, asyncErrorHandler(getUserDelete));

  //super admin

  router
    .route("/fetch-all")
    .get(shopProtect, restrict("super admin"), asyncErrorHandler(fetchAllShop));
  router
    .route("/unblock-shop/:id")
    .patch(
      shopProtect,
      restrict("super admin"),
      asyncErrorHandler(unblockUser)
    );
  router
    .route("/block-shop/:id")
    .patch(shopProtect, restrict("super admin"), asyncErrorHandler(blockUser));
  router
    .route("/getuser/:id")
    .get(shopProtect, restrict("super admin"), asyncErrorHandler(getUserById));

  router.route("/shop-logout").get(asyncErrorHandler(shoplogout));

  app.use("/api/shop", router);
};
