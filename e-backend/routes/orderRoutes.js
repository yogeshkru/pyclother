module.exports = (app) => {
  const router = require("express").Router();
  const Order = require("../controllers/orderController");
  const asyncErrorHandler = require("../utils/asyncErrorhandler");
  const { createOrder, getAllOrders, getMyOrder, updateOrders } = new Order();

  router.route("/create-order").post(asyncErrorHandler(createOrder));
  router.route("/get-all").get(asyncErrorHandler(getAllOrders));
  router.route("/get-myorder").get(asyncErrorHandler(getMyOrder));
  router.route("/update-order").patch(asyncErrorHandler(updateOrders));

  app.use("/api/order", router);
};
