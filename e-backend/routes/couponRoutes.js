module.exports = (app) => {
  const Coupon = require("../controllers/couponController");
  const router = require("express").Router();
  const asyncErrorhandler = require("../utils/asyncErrorhandler");

  const { couponCreate, couponGet, couponOneGet, couponPatch, couponeDelete } = new Coupon();

  router.route("/create-coupon").post(asyncErrorhandler(couponCreate));
  router.route("/get-coupon").get(asyncErrorhandler(couponGet));
  router.route("/patch-coupon/:id").patch(asyncErrorhandler(couponPatch));
  router.route("/delete-coupon/:id").delete(asyncErrorhandler(couponeDelete));
  router.route("/find-coupon/:id").get(asyncErrorhandler(couponOneGet));

  app.use("/api/coupon", router);
};
