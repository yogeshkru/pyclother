const express= require('express');
const connectDatabase = require('./config');
const cors = require('cors')
const app = express();
app.use(cors());
const dotenv = require('dotenv').config();
const PORT = process.env.PORT ;

connectDatabase();

app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`);
})