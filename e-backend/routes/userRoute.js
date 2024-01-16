module.exports = (app) => {
  const router = require("express").Router();
  const { createUser } = require("../controllers/userController");


  router.route("/createUser").post(createUser)




  app.use("/api/user",router)
};

