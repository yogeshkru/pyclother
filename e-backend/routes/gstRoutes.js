module.exports = (app) => {
    const router = require("express").Router();
    const {
        createGst,getgst
    } = require("../controllers/gstController");

    const { authenticateUser, restrict } = require("../middleware/auth");
    
    router
    .route("/create-gst")
    .post(authenticateUser, restrict("shop admin", "super admin"),   createGst);

    router
    .route("/get-gst")
    .post(authenticateUser, restrict("shop admin", "super admin"),   getgst);

    app.use("/api/gst", router);
}
