module.exports = (app) => {
  const router = require("express").Router();
  const {
    colorCreate,
    colorGet,
    colorUpdate,
    colorDelete,
    colorfindone,
  } = require("../controllers/colorController");
  let { shopProtect, restrict } = require("../middleware/auth");
  router
    .route("/colors")
    .post(shopProtect, restrict("super admin", "shop admin"), colorCreate);
  router
    .route("/colorget")
    .get(shopProtect, restrict("super admin", "shop admin"), colorGet);
  router
    .route("/colorUpdates/:id")
    .patch(shopProtect, restrict("super admin", "shop admin"), colorUpdate);
  router
    .route("/colorDelete/:id")
    .delete(shopProtect, restrict("super admin", "shop admin"), colorDelete);
  router
    .route("/colorFind/:id")
    .get(shopProtect, restrict("super admin", "shop admin"), colorfindone);

  app.use("/api/color", router);
};
