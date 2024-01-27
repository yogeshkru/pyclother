module.exports = (app) => {
  const Address = require("../controllers/addressController");

  const router = require("express").Router();
  const { userProtect, restrict } = require("../middleware/auth");

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
    .post(userProtect, asyncErrorhandler(addressCreate));
  router.route("/address-get").get(userProtect, asyncErrorhandler(addressGet));
  router
    .route("/address-patch/:id")
    .patch(userProtect, asyncErrorhandler(addressUpdate));
  router
    .route("/address-delete/:id")
    .delete(userProtect, asyncErrorhandler(addressDelete));
  router
    .route("/address-findid/:id")
    .get(userProtect, asyncErrorhandler(addressfind));

  app.use("/api/address", router);
};
