module.exports = (app) => {
  const router = require("express").Router();
  const {
    createUser,
    login,
    updatePassword,
   
  } = require("../controllers/userController");
  const { userProtect } = require("../middleware/auth");

  router.route("/createUser").post(createUser);
  router.route("/login").post(login);
  router.route("/updatePassword").patch(userProtect, updatePassword);
  
  


  app.use("/api/user", router);
};
