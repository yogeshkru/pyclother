module.exports = (app)=>{
    const router = require("express").Router();
    const orderitem = require("../controllers/orderItemController")
    const { createOrderItem} = new orderitem();
    const asyncErrorHandler = require("../utils/asyncErrorhandler");
    let {  userProtect } = require("../middleware/auth");

    router
    .route("/create-order-item")
    .post(userProtect, asyncErrorHandler(createOrderItem));

    app.use("/api/order-item", router);
}