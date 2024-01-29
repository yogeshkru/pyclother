module.exports = (app) => {
  const router = require("express").Router();
  const Enquiry = require("../controllers/enquiryController");
  const { enquiry, getAllEnquiry, updateEnquiry, deleteEnquiry, getEnquiry } =
    new Enquiry();
  const asyncErrorhandler = require("../utils/asyncErrorhandler");

  router.route("/createEnquiry").post(asyncErrorhandler(enquiry));
  router.route("/getEnquiry").get(asyncErrorhandler(getAllEnquiry));
  router.route("/getOne/:id").get(asyncErrorhandler(getEnquiry));
  router.route("deleteEnquiry/:id").delete(asyncErrorhandler(deleteEnquiry));
  router.route("/updateEnquiry/:id").patch(asyncErrorhandler(updateEnquiry));

  app.use("/api/enquiry", router);
};
