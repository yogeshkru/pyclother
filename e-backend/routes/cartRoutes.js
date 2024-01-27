module.exports = (app) => {
  const router = require("express").Router();
  const carts=require('../controllers/cartController')
  const asyncErrorhandler=require("../utils/asyncErrorhandler.js")
  const{
    cart,
    deleteItemCart,
    getUserCart,
    updateProductQuantity,

  }= new carts()
  // const cartRoute = require("../controllers/cartController.js");
  const { authenticateUser } = require("../middleware/auth");

  router.route("/createcart").post(authenticateUser, asyncErrorhandler(cart));
  router
    .route("/deletefromcart/:id")
    .delete(authenticateUser, asyncErrorhandler(deleteItemCart));
  router.route("/showtocart").get(authenticateUser, asyncErrorhandler(getUserCart));
  router
    .route("/update-cartitem/id/:newQuantity")
    .patch(authenticateUser, asyncErrorhandler(updateProductQuantity));

  app.use("/api/cart", router);
};
