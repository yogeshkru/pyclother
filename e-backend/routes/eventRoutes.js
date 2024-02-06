module.exports = (app) => {
  const router = require("express").Router();
  const EventController = require("../controllers/eventController");
  const asyncErrorhandler = require("../utils/asyncErrorhandler");
  const { eventCreate, getAllShopEvent, deleteEvent } = new EventController();
  const { authenticateUser, restrict } = require("../middleware/auth");

  router
    .route("/event-create")
    .post(
      authenticateUser,
      restrict("super admin"),
      asyncErrorhandler(eventCreate)
    );

  router
    .route("/get-event")
    .get(
      authenticateUser,
      restrict("super admin"),
      asyncErrorhandler(getAllShopEvent)
    );

  router
    .route("/delete-event/:id")
    .delete(
      authenticateUser,
      restrict("super admin"),
      asyncErrorhandler(deleteEvent)
    );

    app.use("/api/event",router)
};
