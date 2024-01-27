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
  const { userProtect } = require("../middleware/auth");

  router.route("/createcart").post(userProtect, asyncErrorhandler(cart));
  router
    .route("/deletefromcart/:id")
    .delete(userProtect, asyncErrorhandler(deleteItemCart));
  router.route("/showtocart").get(userProtect, asyncErrorhandler(getUserCart));
  router
    .route("/update-cartitem/id/:newQuantity")
    .patch(userProtect, asyncErrorhandler(updateProductQuantity));

  app.use("/api/cart", router);
};
