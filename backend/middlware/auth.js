const jwt = require("jsonwebtoken");
const secretKey = require("../secret.json");
const Login = require("../schema/login.js");

const authenticatedUser = async (req, res, next) =>{
    let idToken = req.cookies['login'];
    if (!idToken) {
      return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decodedMessage = jwt.verify(idToken, secretKey.web);
        const user = await Login.findOne({
            email: decodedMessage
        });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` })
    }
}

module.exports = authenticatedUser;