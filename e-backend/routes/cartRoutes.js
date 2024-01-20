module.exports = (app)=>{
    const router = require("express").Router();
    const cartRoute = require("../controllers/cartController.js")

    router.route('/createcart').post(cartRoute.cart)
    router.route('/deletefromcart/:id').delete(cartRoute.deleteItemCart)
    router.route('/showtocart').get(cartRoute.getUserCart)

    app.use("/api/cart", router);
}