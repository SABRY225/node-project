require("dotenv").config();
const express=require("express");
const cors=require("cors");
const connectDB = require("./config/db");

const app=express();

connectDB();
app.use(express.json());
app.use(cors());


app.listen(5000,()=>{console.log("server start")})

