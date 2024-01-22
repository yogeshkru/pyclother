module.exports = (app) => {
  const router = require("express").Router();
  const {
    createUser,
    login,
    updatePasswordByUserLogin,
  } = require("../controllers/userController");

  router.route("/createUser").post(createUser);
  router.route("/login").post(login);
  router.route("/updatePassword").patch(updatePasswordByUserLogin);

  app.use("/api/user", router);
};
