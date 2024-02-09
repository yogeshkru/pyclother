module.exports=(app)=>{
    const Privacypolicy=require("../controllers/privacypolicyController")
    const router = require("express").Router();
    const asyncErrorHandler = require("../utils/asyncErrorhandler");
    const { authenticateUser, restrict } = require("../middleware/auth");
    const {
    privacypolicyPost,
    privarypolicyGet
    }=new Privacypolicy()

    router.route("/privacyPost").post(authenticateUser,restrict("super admin"),asyncErrorHandler(privacypolicyPost))
    router.route("/privacyGet").get(authenticateUser,asyncErrorHandler(privarypolicyGet))
    

    app.use("/api/privacy",router)
}