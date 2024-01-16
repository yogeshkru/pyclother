const express=require('express');
const app=express()
const cors=require('cors')
const bodyparser=require('body-parser')
const cookie=require('cookie-parser')

const globalError=require('./utils/globalErrorhandler')
const customError=require('./utils/customError')


// *****************Third part liberary****************

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use(cookie())
app.use(cors())

if(process.env.NODE_ENV !== "PRODUCTION"){
    require("dotenv").config()
}


require("./routes/userRoute")(app)
//Routes error handler
app.all("*",(req,res,next)=>{
    const error=new customError(
        `can't find ${req.originalUrl} on the server`,404
    )
    next(error)
})

app.use(globalError)
module.exports=app