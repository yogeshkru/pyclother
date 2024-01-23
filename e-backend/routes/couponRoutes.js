module.exports = (app) => {
  const Coupon = require("../controllers/couponController");
  const router = require("express").Router();
  const asyncErrorhandler = require("../utils/asyncErrorhandler");

  const { couponCreate, couponGet, couponOneGet, couponPatch, couponeDelete } =
    new Coupon();
  const { shopProtect, restrict } = require("../middleware/auth");
  router
    .route("/create-coupon")
    .post(
      shopProtect,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(couponCreate)
    );
  router
    .route("/get-coupon")
    .get(
      shopProtect,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(couponGet)
    );
  router
    .route("/patch-coupon/:id")
    .patch(
      shopProtect,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(couponPatch)
    );
  router
    .route("/delete-coupon/:id")
    .delete(
      shopProtect,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(couponeDelete)
    );
  router
    .route("/find-coupon/:id")
    .get(
      shopProtect,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(couponOneGet)
    );

  app.use("/api/coupon", router);
};
