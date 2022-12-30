const bodyParser = require("body-parser")
const cors = require('cors')
const express = require('express')
const app = express()
require('dotenv').config()
const dbConnect = require('./config/dbConnect')
const router = require('./router/userRouter')
const productsData =require('./Data/Data')



const PORT = process.env.PORT || 5000
dbConnect();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api",router)

app.get("/api/products",(req,res) =>{
    res.send(productsData)
})
app.listen(PORT,()=>{
    console.log(`server is running on port no ${PORT}`)
})