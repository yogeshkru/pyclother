module.exports = (app) => {
  const router = require("express").Router();
  const Order = require("../controllers/orderController");
  const asyncErrorHandler = require("../utils/asyncErrorhandler");
  const { createOrder, getAllOrders, getMyOrder, updateOrders } = new Order();
  let { shopProtect, restrict, userProtect } = require("../middleware/auth");

  router
    .route("/create-order")
    .post(userProtect, asyncErrorHandler(createOrder));
  router.route("/get-myorder").get(userProtect, asyncErrorHandler(getMyOrder));
  router
    .route("/update-order")
    .patch(userProtect, asyncErrorHandler(updateOrders));

  router
    .route("/get-all")
    .get(
      shopProtect,
      restrict("super admin", "shop admin"),
      asyncErrorHandler(getAllOrders)
    );

  app.use("/api/order", router);
};


