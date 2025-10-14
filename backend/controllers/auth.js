const { OAuth2Client } = require("google-auth-library")
const jwt = require('jsonwebtoken')
const secretKey = require('../secret.json')

exports.authLogin = async (req, res) =>{
    const client = new OAuth2Client(process.env.OAUTH_CLIENT_ID);
    const authID = req.body.authID;
    try {
        const ticket = await client.verifyIdToken({
            idToken: authID,
            audience: process.env.OAUTH_CLIENT_ID,
        })
        
        const { name, email, picture } = ticket.getPayload()
        const loginToken = jwt.sign(`${email}`, secretKey.web)

        await Login
    } catch (error) {
        console.log(error)
        return res.status(200).json({ message: `Something went wrong: ${error}` })
    }
}