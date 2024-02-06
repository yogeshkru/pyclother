const { authenticateUser, restrict } = require("../middleware/auth");

module.exports = (app) => {
  const router = require("express").Router();
  const Enquiry = require("../controllers/enquiryController");
  const { enquiry, getAllEnquiry, updateEnquiry, deleteEnquiry, getEnquiry } =
    new Enquiry();
  const asyncErrorhandler = require("../utils/asyncErrorhandler");

  router.route("/createEnquiry").post(asyncErrorhandler(enquiry));
  router.route("/getOne/:id").get(asyncErrorhandler(getEnquiry));


  // Auth Routes
  router
    .route("/getEnquiry")
    .get(authenticateUser,restrict("super admin"), asyncErrorhandler(getAllEnquiry));
  router
    .route("/deleteEnquiry/:id")
    .delete(authenticateUser,restrict("super admin"), asyncErrorhandler(deleteEnquiry));
  router
    .route("/updateEnquiry/:id")
    .patch(authenticateUser,restrict("super admin"), asyncErrorhandler(updateEnquiry));

  app.use("/api/enquiry", router);
};
