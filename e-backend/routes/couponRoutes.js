module.exports = (app) => {
  const Coupon = require("../controllers/couponController");
  const router = require("express").Router();
  const asyncErrorhandler = require("../utils/asyncErrorhandler");

  const { couponCreate, couponGet, couponOneGet, couponPatch, couponeDelete } =
    new Coupon();
  const { authenticateUser, restrict } = require("../middleware/auth");
  router.route("/createcoupon").post(
    authenticateUser,

    restrict("super admin", "shop admin"),
    asyncErrorhandler(couponCreate)
  );
  router
    .route("/get-coupon")
    .get(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(couponGet)
    );
  router
    .route("/patch-coupon/:id")
    .patch(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(couponPatch)
    );
  router
    .route("/delete-coupon/:id")
    .delete(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(couponeDelete)
    );
  router
    .route("/find-coupon/:id")
    .get(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(couponOneGet)
    );

  app.use("/api/coupon", router);
};
