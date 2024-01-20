module.exports = (app) => {
  const router = require("express").Router();
  const {
    createUser,
    login,
    updatePassword,
  } = require("../controllers/userController");

  router.route("/createUser").post(createUser);
  router.route("/login").post(login);
  router.route("/updatePassword").patch(updatePassword);

  app.use("/api/user", router);
};
