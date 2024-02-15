module.exports = (app) => {
  const Address = require("../controllers/addressController");

  const router = require("express").Router();
  const { authenticateUser } = require("../middleware/auth");

  const asyncErrorhandler = require("../utils/asyncErrorhandler");
  const {
    addressCreate,
    addressGetBilling,
    addressGetshipping,
    addressUpdateBilling,
    addressUpdateShipping,
    addressDelete,
    addressfind,
  } = new Address();

  // ********************** Routes ****************************//
  router
    .route("/address-create")
    .post(authenticateUser, asyncErrorhandler(addressCreate));
  router
    .route("/address_patch_billing/:id")
    .patch(authenticateUser, asyncErrorhandler(addressUpdateBilling));
    router
    .route("address_patch_shipping/:id")
    .patch(authenticateUser, asyncErrorhandler(addressUpdateShipping));
  router
    .route("/address-get-shipping/:id")
    .get(authenticateUser, asyncErrorhandler( addressGetshipping));
    router
    .route("/address-get-billing/:id")
    .get(authenticateUser, asyncErrorhandler(addressGetBilling));
  router
    .route("/address-delete/:id")
    .delete(authenticateUser, asyncErrorhandler(addressDelete));
  router
    .route("/address-find")
    .get(authenticateUser, asyncErrorhandler(addressfind));

  app.use("/api/address", router);
};
