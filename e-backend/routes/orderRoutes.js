module.exports = (app) => {
  const router = require("express").Router();
  const Order = require("../controllers/orderController");
  const asyncErrorHandler = require("../utils/asyncErrorhandler");
  const {
    createOrder,
    getAllOrders,
    getoneorder,
    updateOrders,
    getAllSellerOrders,
  } = new Order();
  let { authenticateUser, restrict } = require("../middleware/auth");

  router
    .route("/create-order")
    .post(authenticateUser, asyncErrorHandler(createOrder));
  router
    .route("/get-myorder")
    .get(authenticateUser, asyncErrorHandler(getoneorder));
  router
    .route("/update-order")
    .patch(authenticateUser, asyncErrorHandler(updateOrders));
  // router
  // .route("/update-address")
  // .patch(authenticateUser, asyncErrorHandler(updateaddress));

  router
    .route("/get-all")
    .get(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorHandler(getAllOrders)
    );

  router
    .route("/get-shop-product")
    .get(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorHandler(getAllSellerOrders)
    );
  app.use("/api/order", router);
};
