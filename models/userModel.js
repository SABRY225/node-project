const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
    role:{
        type:String,
        required:true,
        enum:["admin","marketer"],
        default:"marketer"
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
    // task
})

module.exports=mongoose.model('User',userSchema)