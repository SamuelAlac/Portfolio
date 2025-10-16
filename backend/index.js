require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GraphQLClient } = require('graphql-request')
const app = express();
const cookieParser = require('cookie-parser');
const githubRoutes = require('./routes/github')
const aiRoutes = require('./routes/ai');
const { logger } = require('./middlware/logger');
const { default: mongoose } = require('mongoose');
const authRoutes = require('./routes/auth');
const PORT = process.env.PORT;
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}));

app.use(cookieParser())

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(logger)

mongoose.connect(process.env.MONGO_DB_URI)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(`Connection error: ${err}`))

app.use('/api/github', githubRoutes)

app.use('/api/ai', aiRoutes)

app.use('/api/auth/google', authRoutes)

app.listen(PORT, () =>{
    console.log(`Server running on localhost:`+PORT)
})