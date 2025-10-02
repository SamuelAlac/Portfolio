require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GraphQLClient } = require('graphql-request')
const app = express();
const githubRoutes = require('./routes/github')

app.use(cors());
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use('/api/github', githubRoutes)

app.listen(PORT, () =>{
    console.log(`Server running on localhost:`+PORT)
})