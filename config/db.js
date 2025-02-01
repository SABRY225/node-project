const mongoose= require("mongoose");


const connectDB = ()=>{
    try {
        mongoose.connect(process.env.URLDB)
        console.log("MongoDB connected ...");
        
    } catch (error) {
        console.error(error)
    }
}

module.exports=connectDB
