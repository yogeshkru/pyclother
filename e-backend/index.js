const app=require("./app")
//db 
const connectDatabase=require('./db/Database')
process.on('uncaughtException',(err)=>{
    console.log(`Error ${err.message}`)
    console.log(`shutting down the server for handling uncaught exception`)
})


//config
if(process.env.NODE_ENV !== "production"){
    require('dotenv').config()
}

//db connect
connectDatabase()

const server=app.listen(process.env.PORT,()=>{
    console.log('server connected ' + process.env.PORT)
})

process.on('unhandledRejection',(err)=>{
    console.log(`shutting down server for ${err.message}`)
    console.log(`shutting down server for unhandled promise rejection`)
    server.close(()=>{
        process.exit(1)
    })
})
