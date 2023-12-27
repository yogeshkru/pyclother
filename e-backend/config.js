const  mongoose = require("mongoose")

const connectDatabase=()=>{
    mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then((data)=>{
        console.log('connected  to server')
    })
}
module.exports=connectDatabase;