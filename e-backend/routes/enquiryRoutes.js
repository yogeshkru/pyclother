module.exports = (app) => {
  const router = require("express").Router();
  const enquiryController = require("../controllers/enquiryController.js");

  router.route("/createEnquiry").post(enquiryController.enquiry);
  router.route("/getEnquiry").get(enquiryController.getAllEnquiry);
  router.route("/getOne/:id").get(enquiryController.getEnquiry);
  router.route("/deleteEnquiry/:id").delete(enquiryController.deleteEnquiry);
  router.route("/updateEnquiry/:id").patch(enquiryController.updateEnquiry);

  app.use("/api/enquiry", router);
};
