module.exports = (app) => {
    const router = require("express").Router();
    const {
        createGst
    } = require("../controllers/gstController");

    const { shopProtect, restrict } = require("../middleware/auth");
    router
    .route("/create-gst")
    .post(shopProtect, restrict("shop admin", "super admin"),   createGst);
    app.use("/api/gst", router);
}
