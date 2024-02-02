module.exports = (app) => {
    const router = require("express").Router();
    const {
        createGst,getgst,getonegst,deletegst,updategst
    } = require("../controllers/gstController");

    const { authenticateUser, restrict } = require("../middleware/auth");
    
    router
    .route("/create-gst")
    .post(authenticateUser, restrict("shop admin", "super admin"),   createGst);

    router
    .route("/get-gst")
    .get(authenticateUser, restrict("shop admin", "super admin"),   getgst);

    router
    .route("/get-one-gst/:id")
    .get(authenticateUser, restrict("shop admin", "super admin"),   getonegst);

    router
    .route("/delete-gst")
    .delete(authenticateUser, restrict("shop admin", "super admin"),   deletegst);

    router
    .route("/update-gst/:id")
    .patch(authenticateUser, restrict("shop admin", "super admin"),   updategst);

    app.use("/api/gst", router);
}
