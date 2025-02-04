const express=require("express");
const { register } = require("../controller/authController");
const router=express.Router()


router.post('/register',register)
router.post('/login')
router.post('/send-otp')
router.post('/forget-password')
router.post('/verify-account')
router.post('/reaste-password')

module.exports=router