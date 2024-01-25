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
    .route("/address_create")
    .post(userProtect, asyncErrorhandler(addressCreate));
  router.route("/address_get").get(userProtect, asyncErrorhandler(addressGet));
  router
    .route("/address_patch/:id")
    .patch(userProtect, asyncErrorhandler(addressUpdate));
  router
    .route("/address_delete/:id")
    .delete(userProtect, asyncErrorhandler(addressDelete));
  router
    .route("/address_findid/:id")
    .get(userProtect, asyncErrorhandler(addressfind));

  app.use("/api/address", router);
};
