module.exports=(app)=>{
    const Address=require("../controllers/addressController")
    const router=require("express").Router()
    const asyncErrorhandler=require("../utils/asyncErrorhandler")
    const {addressCreate}=new Address()
    router.route("/address_create").post(asyncErrorhandler(addressCreate))


   app.use("/api/address",router)
}