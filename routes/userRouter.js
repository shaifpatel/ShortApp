const express = require('express')
const { signUp, login } = require('../controller/usercontroller')
const userRouter = express.Router()

userRouter.post('/signup',signUp)
userRouter.post('/login',login)

userRouter.post('/login',(req,resp)=>{
    resp.send("login")
})
module.exports = userRouter