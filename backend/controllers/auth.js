require('dotenv').config();
const { OAuth2Client } = require("google-auth-library")
const jwt = require('jsonwebtoken')
const secretKey = require('../secret.json')
const Login = require('../schema/login.js');

exports.loginUser = async (req, res) =>{
    const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);
    const authID = req.body.authID;
    try {
        const ticket = await client.verifyIdToken({
            idToken: authID,
            audience: process.env.OAUTH_CLIENT_ID,
        })
        
        const { name, email, picture } = ticket.getPayload()
        const loginToken = jwt.sign(`${email}`, secretKey.web)

        const user = await Login.findOneAndUpdate({ email }, { name, picture }, { new: true, upsert: true })

        res.status(200).cookie('login', loginToken, { expire: 360000 + Date.now() }).json({ message: 'Sucessfully logged in', success: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` })
    }
}

exports.getAuthenticatedUser = async (req, res) =>{
    try {
        const data = await Login.find({})
        res.status(200).json({users: data})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` })
    }
}

exports.logoutUser = async (req, res) =>{
    try {
        res.clearCookie('login').json({ message: 'Successfully logged out', success: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` }) 
    }
}

exports. checkLoginStatus = async (req, res) =>{
    try {
        res.status(200).json({ message: 'User already logged in', success: true })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: `Something went wrong: ${error}` }) 
    }
}