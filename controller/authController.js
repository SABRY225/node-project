const User = require("../models/userModel");


const register=async (req,res)=>{
   try {
    const data=req.body;
    const newUser= await User.findOne({email:data.email})
    if(newUser){
        return res.status(400).json({message:"User already Exists"})
    }
    const addUser=new User(data);
    addUser.save();
    return res.status(200).json({
        message:"create account successfully"
    })
    
   } catch (error) {
    res.status(500).json(error)
   }
}

module.exports={
    register
}