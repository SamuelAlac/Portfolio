require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GraphQLClient } = require('graphql-request')
const app = express();
const cookieParser = require('cookie-parser');
const githubRoutes = require('./routes/github')
const aiRoutes = require('./routes/ai');
const { logger } = require('./middlware/logger');
const PORT = process.env.PORT;
app.use(cors());

app.use(cookieParser)

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(logger)

app.use('/api/github', githubRoutes)

app.use('/api/ai', aiRoutes)

app.listen(PORT, () =>{
    console.log(`Server running on localhost:`+PORT)
})