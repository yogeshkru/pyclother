module.exports = (app) => {
  const router = require("express").Router();
  const {
    brandTitle,
    getAllbrands,
    updateBrand,
    deleteBrand,
    findBrand,
  } = require("../controllers/brandController");

  const { shopProtect,restrict } = require("../middleware/auth");

     
  

  router.route("/brands").post(shopProtect,restrict("shop admin","super admin"),brandTitle);
  router.route("/allbrands").get(shopProtect,restrict("shop admin","super admin"),getAllbrands);
  router.route("/updatebrand/:id").patch(shopProtect,restrict("shop admin","super admin"),updateBrand);
  router.route("/deleteBrand/:id").delete(shopProtect,restrict("shop admin","super admin"),deleteBrand);
  router.route("/findBrand/:id").get(shopProtect,restrict("shop admin","shop admin"),findBrand)
  app.use("/api/brand", router);
};
