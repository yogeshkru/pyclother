module.exports = (app) => {
    const Shop = require('../controllers/shopController');
    const router = require('express').Router();
    const asyncErrorHandler = require("../utils/asyncErrorhandler")

    const { shopCreate,shopLogin,shopForget,shopResetPassword } = new Shop();

    
    router.route("/create-shop").post(asyncErrorHandler(shopCreate));
    router.route("/login-shop").post(asyncErrorHandler(shopLogin))
    router.route("/update-shop").post(asyncErrorHandler(shopForget))
    router.route("/patch-shop").patch(asyncErrorHandler(shopResetPassword))
    
   
    app.use("/api/shop", router);
};
