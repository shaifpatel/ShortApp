const db = require('../model/index')
const User = db.users
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const jwt_key = "jwt"




////////////   signup     ////////
const signUp = async (req, resp) => {
    const { name, email, password } = req.body

    const existingUser = await User.findOne({ where: { email: email } })
    if (existingUser) {
        return resp.status(400).json({ message: "user alredy exists" })
    }

    const hashpassword = await bcrypt.hash(password, 10)

    const data = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashpassword
    })
    resp.status(201).json({ data: data })
}



/////////     login    ////////////
const login = async (req, resp) => {
    const { email, password } = req.body

    const existingUser = await User.findOne({ where: { email: email } })
    if (!existingUser) {
        resp.status(404).json({ message: "user not found" })
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password)
    if (!matchPassword) {
        resp.status(400).json({ message: "invalid credentials" })
    }

    const token = await jwt.sign({ email: existingUser.email,id:existingUser.id }, jwt_key)
    resp.status(201).json({ data: existingUser, token: token })
}

module.exports = {
    signUp,
    login
}