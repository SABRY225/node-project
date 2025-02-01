const mongoose= require("mongoose");

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    totalAmount:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        required:true  
    },
    // products:[{
    //     name:{
    //         type:String,
    //         required:true
    //     },
    //     price:{
    //         type:Number,
    //         required:true
    //     },
    //     quantity:{
    //         type:Number,
    //         required:true
    //     },
    // }]
    // task
})

module.exports=mongoose.model('Order',orderSchema)