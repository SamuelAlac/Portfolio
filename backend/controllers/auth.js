require('dotenv').config();
const { OAuth2Client } = require("google-auth-library")
const jwt = require('jsonwebtoken')
const Login = require('../schema/login.js');


// @desc    POST USER
// @route   POST api/auth/google/secret
exports.loginUser = async (req, res) =>{
    const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);
    const { authID, passcode } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: authID,
            audience: process.env.OAUTH_CLIENT_ID,
        })

        if(passcode !== process.env.ADMIN_SECRET){
            return res.status(403).json({ success: false, message: 'Access Denied: invalid passcode' })
        }
        
        const { name, email, picture } = ticket.getPayload()
        const loginToken = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '1h' })

        await Login.findOneAndUpdate({ email }, { email, name, picture }, { new: true, upsert: true })

        res.status(200)
        .cookie('login', loginToken, { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/', maxAge: 60 * 60 * 1000 })
        .json({ message: 'Sucessfully logged in', success: true, user: { name, email, picture } })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false,  message: `Something went wrong: ${error}` })
    }
}

// @desc    GET AUTHENTICATED USER
// @route   GET api/auth/google/authenticated
exports.getAuthenticatedUser = async (req, res) =>{
    try {

        if(!req.user){
            return res.status(404).json({ success: false, message: 'Not logged in' })
        }
        res.status(200).json({ success: true, user: req.user})
    } catch (error) {
        console.log(error)
        return res.status(401).json({ success: false, message: `Invalid or expired token` })
    }
}

// @desc    POST LOGOUT USER
// @route   POST api/auth/google/logout
exports.logoutUser = async (req, res) =>{
    try {
        res.clearCookie('login', { httpOnly: true, sameSite: 'lax', secure: process.env.NODE_ENV === 'production', path: '/' }).json({ message: 'Successfully logged out', success: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` }) 
    }
}

// @desc    GET USER LOGIN STATUS
// @route   GET api/auth/google/status
exports. checkLoginStatus = async (req, res) =>{
    try {
        res.status(200).json({ message: 'User already logged in', success: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` }) 
    }
}