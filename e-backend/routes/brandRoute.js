module.exports = (app) => {
  const router = require("express").Router();
  const {
    brandTitle,
    getAllbrands,
    updateBrand,
    deleteBrand,
    findBrand,
  } = require("../controllers/brandController");

  router.route("/brands").post(brandTitle);
  router.route("/allbrands").get(getAllbrands);
  router.route("/updatebrand/:id").patch(updateBrand);
  router.route("/deleteBrand/:id").delete(deleteBrand);
  router.route("/findBrand/:id").get(findBrand)
  app.use("/api/brand", router);
};
