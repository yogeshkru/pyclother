module.exports = (app) => {
  const Shop = require("../controllers/shopController");
  const router = require("express").Router();
  const asyncErrorHandler = require("../utils/asyncErrorhandler");

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

  router.route("/login-shop").post(asyncErrorHandler(shopLogin));
  router.route("/update-shop").post(asyncErrorHandler(shopForget));
  router.route("/patch-shop").patch(asyncErrorHandler(shopResetPassword));
  router.route("/create-shop").post(asyncErrorHandler(shopCreate));
  router.route("/fetch-all").get(asyncErrorHandler(fetchAllShop));
  router.route("/unblock-shop").patch(asyncErrorHandler(unblockUser));
  router.route("/update-shop").patch(asyncErrorHandler(updateMe));
  router
    .route("/update-shoppassword")
    .patch(asyncErrorHandler(updatePasswordByLogin));
  router.route("/block-shop").patch(asyncErrorHandler(blockUser));
  router.route("/delete-shop").delete(asyncErrorHandler(deleteMe));
  router.route("/getuser").get(asyncErrorHandler(getUserById));
  router.route("/shop-delete").delete(asyncErrorHandler(getUserDelete));
  router.route("/shop-logout").get(asyncErrorHandler(shoplogout));

  app.use("/api/shop", router);
};
