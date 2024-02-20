module.exports = (app) => {
  const Shop = require("../controllers/shopController");
  const router = require("express").Router();
  const asyncErrorHandler = require("../utils/asyncErrorhandler");
  const { authenticateUser, restrict } = require("../middleware/auth");
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

  router
    .route("/update-shop")
    .patch(authenticateUser, asyncErrorHandler(updateMe));
  router
    .route("/update-shopassword")
    .patch(authenticateUser, asyncErrorHandler(updatePasswordByLogin));
  router
    .route("/delete-shop")
    .delete(authenticateUser, asyncErrorHandler(deleteMe));

  //super admin

  router
    .route("/fetch-all")
    .get(
      authenticateUser,
      restrict("super admin"),
      asyncErrorHandler(fetchAllShop)
    );
  router
    .route("/unblock-shop/:id")
    .patch(
      authenticateUser,
      restrict("super admin"),
      asyncErrorHandler(unblockUser)
    );
  router
    .route("/block-shop/:id")
    .patch(
      authenticateUser,
      restrict("super admin"),
      asyncErrorHandler(blockUser)
    );
  router
    .route("/getshop")
    .get(
      authenticateUser,
      restrict("super admin","shop admin"),
      asyncErrorHandler(getUserById)
    );
  router
    .route("/shop-delete/:id")
    .delete(
      authenticateUser,
      restrict("super admin"),
      asyncErrorHandler(getUserDelete)
    );

  router.route("/shop-logout").get(asyncErrorHandler(shoplogout));

  app.use("/api/shop", router);
};
