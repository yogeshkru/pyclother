module.exports=(app)=>{
    const Address=require("../controllers/addressController")
    const router=require("express").Router()
    const asyncErrorhandler=require("../utils/asyncErrorhandler")
    const {addressCreate,addressGet,addressUpdate,addressDelete,addressfind}=new Address()
    router.route("/address_create").post(asyncErrorhandler(addressCreate))
    router.route("/address_get").get(asyncErrorhandler(addressGet))
    router.route("address_patch/:id").patch(asyncErrorhandler(addressUpdate))
    router.route("/address_delete/:id").delete(asyncErrorhandler(addressDelete))
    router.route("/address_findid/:id").get(asyncErrorhandler(addressfind))

   app.use("/api/address",router)
}