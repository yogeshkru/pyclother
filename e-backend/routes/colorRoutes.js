module.exports=(app)=>{
    const router=require('express').Router()
    const {
        colorCreate,
        colorGet,
        colorUpdate,
        colorDelete,
        colorfindone
    }=require('../controllers/colorController')
    router.route("/colors").post(colorCreate)
    router.route("/colorget").get(colorGet)
    router.route("/colorUpdates/:id").patch(colorUpdate)
    router.route("/colorDelete/:id").delete(colorDelete)
    router.route("/colorFind/:id").get(colorfindone)



    app.use("/api/color",router)
}


