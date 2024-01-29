module.exports = (app) => {
  const Address = require("../controllers/addressController");

  const router = require("express").Router();
  const { authenticateUser } = require("../middleware/auth");

  const asyncErrorhandler = require("../utils/asyncErrorhandler");
  const {
    addressCreate,
    addressGet,
    addressUpdate,
    addressDelete,
    addressfind,
  } = new Address();

  // ********************** Routes ****************************//
  router
    .route("/address-create")
    .post(authenticateUser, asyncErrorhandler(addressCreate));
  router
    .route("/address-get")
    .get(authenticateUser, asyncErrorhandler(addressGet));
  router
    .route("/address-patch/:id")
    .patch(authenticateUser, asyncErrorhandler(addressUpdate));
  router
    .route("/address-delete/:id")
    .delete(authenticateUser, asyncErrorhandler(addressDelete));
  router
    .route("/address-findid/:id")
    .get(authenticateUser, asyncErrorhandler(addressfind));

  app.use("/api/address", router);
};
