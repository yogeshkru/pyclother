module.exports = (app) => {
  const router = require("express").Router();
  const Order = require("../controllers/orderController");
  const asyncErrorHandler = require("../utils/asyncErrorhandler");
  const { createOrder, getAllOrders, getoneorder, updateOrders} = new Order();
  let { authenticateUser, restrict } = require("../middleware/auth");

  router
    .route("/create-order")
    .post( asyncErrorHandler(createOrder));
  router
    .route("/get-myorder")
    .get(authenticateUser, asyncErrorHandler(getoneorder));
  router
    .route("/update-order")
    .patch(authenticateUser, asyncErrorHandler(updateOrders));
    
  router
    .route("/get-all")
    .get(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorHandler(getAllOrders)
    );

  app.use("/api/order", router);
};
