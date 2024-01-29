module.exports = (app) => {
  const router = require("express").Router();
  const Color = require("../controllers/colorController");
  const asyncErrorhandler = require("../utils/asyncErrorhandler");
  const { colorCreate, colorGet, colorUpdate, colorDelete, colorFindOne } =
    new Color();
  let { authenticateUser, restrict } = require("../middleware/auth");
  router
    .route("/colors")
    .post(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(colorCreate)
    );
  router
    .route("/colorget")
    .get(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(colorGet)
    );
  router
    .route("/colorUpdates/:id")
    .patch(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(colorUpdate)
    );
  router
    .route("/colorDelete/:id")
    .delete(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(colorDelete)
    );
  router
    .route("/colorFind/:id")
    .get(
      authenticateUser,
      restrict("super admin", "shop admin"),
      asyncErrorhandler(colorFindOne)
    );

  app.use("/api/color", router);
};
