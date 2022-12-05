
const jwt = require('jsonwebtoken')
const jwt_key = "jwt"

const auth = async (req, resp, next) => {
    try {
        let token = req.headers.authorization

        if (token) {

            token = token.split(' ')[1]
            const data = jwt.verify(token, jwt_key)
            req.userId = data.id
            

        }
        else {
            resp.status({ message: "unauthorized user" })
        }
        next()
    }
    catch (error) {
        resp.status(401).json({ message: "unauthorized user" })

    }
}
module.exports = auth