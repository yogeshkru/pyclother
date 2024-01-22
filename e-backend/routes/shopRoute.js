module.exports = (app) => {
    const Shop = require('../controllers/shopController');
    const router = require('express').Router();
    const asyncErrorHandler = require('../utils/asyncErrorHandler');

    const { shopCreate } = new Shop();

    // Define the route for creating a shop
    router.route("/create-shop").post(asyncErrorHandler(shopCreate));

    // Mount the router under the "/api/shop" path
    app.use("/api/shop", router);
};
