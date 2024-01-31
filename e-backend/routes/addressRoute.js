module.exports = (app) => {
  const Address = require("../controllers/addressController");

  const router = require("express").Router();
  const { userProtect, restrict } = require("../middleware/auth");

  const asyncErrorhandler = require("../utils/asyncErrorhandler");
  const {
    addressCreate,
    addressGet,
    addressUpdateBilling,
    addressUpdateShipping,
    addressDelete,
    addressfind,
  } = new Address();

  // ********************** Routes ****************************//
  router
    .route("/address_create")
    .post(userProtect, asyncErrorhandler(addressCreate));
  router.route("/address_get").get(userProtect, asyncErrorhandler(addressGet));
  router
    .route("address_patch_billing/:id")
    .patch(userProtect, asyncErrorhandler(addressUpdateBilling));
    router
    .route("address_patch_shipping/:id")
    .patch(userProtect, asyncErrorhandler(addressUpdateShipping));
  router
    .route("/address_delete/:id")
    .delete(userProtect, asyncErrorhandler(addressDelete));
  router
    .route("/address_findid/:id")
    .get(userProtect, asyncErrorhandler(addressfind));

  app.use("/api/address", router);
};
