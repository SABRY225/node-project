require("dotenv").config();
const express=require("express");
const cors=require("cors");
const connectDB = require("./config/db");

const app=express();

connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/v1/auth',require('./routes/authRoute'))
app.use('/api/v1/user',require('./routes/userRoute'))
app.use('/api/v1/order',require('./routes/orderRoute'))

app.listen(5000,()=>{console.log("server start")})
