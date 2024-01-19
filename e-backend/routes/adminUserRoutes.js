module.exports = (app)=>{
    const router = require("express").Router();
const {createNewUser,activation}= require("../controllers/adminUserController")
router.route("/creatuser").post(createNewUser)
router.route("/activate").post(activation)

app.use("/api/admin",router)

}