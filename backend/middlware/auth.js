const jwt = require("jsonwebtoken");
const Login = require("../schema/login.js");

const authenticatedUser = async (req, res, next) =>{
    let idToken = req.cookies['login'];
    if (!idToken) {
      return res.status(401).json({ message: "No token provided" });
    }
    try {
        const decoded = jwt.verify(idToken, process.env.JWT_SECRET);
        const user = await Login.findOne({
            email: decoded.email
        });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        req.user = user;
        next();
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: `Invalid or expired token: ${error}` })
    }
}

module.exports = authenticatedUser;