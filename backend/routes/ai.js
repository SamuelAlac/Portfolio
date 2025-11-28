const express = require('express')
const { getChatHistory, postChat } = require('../controllers/ai')
const router = express.Router()

// GET CHAT HISTORY FROM /api/ai/history/
router.get('/history', getChatHistory);

// POST CHAT MESSAGE TO /api/ai/message/
router.post('/message', postChat);

module.exports = router;