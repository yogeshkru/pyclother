module.exports = (app)=>{
    const router = require("express").Router();
    const orderitem = require("../controllers/orderItemController")
    const { createOrderItem,getOrderItem,getOneOrderItem} = new orderitem();
    const asyncErrorHandler = require("../utils/asyncErrorhandler");
    let {  authenticateUser } = require("../middleware/auth");

    router
    .route("/create-order-item")
    .post( authenticateUser , asyncErrorHandler(createOrderItem));

    
    router
    .route("/getall-order-item")
    .get( authenticateUser , asyncErrorHandler(getOrderItem));

    
    router
    .route("/getone-order-item/:id")
    .get( authenticateUser , asyncErrorHandler(getOneOrderItem));

    app.use("/api/order-item", router);
}