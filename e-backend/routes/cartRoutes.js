module.exports = (app) => {
  const router = require("express").Router();
  const cartRoute = require("../controllers/cartController.js");
  const { userProtect } = require("../middleware/auth");

  router.route("/createcart").post(userProtect, cartRoute.cart);
  router
    .route("/deletefromcart/:id")
    .delete(userProtect, cartRoute.deleteItemCart);
  router.route("/showtocart").get(userProtect, cartRoute.getUserCart);
  router
    .route("/update-cartitem/id/:newQuantity")
    .patch(userProtect, cartRoute.updateProductQuantity);

  app.use("/api/cart", router);
};
