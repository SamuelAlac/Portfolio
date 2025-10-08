const express = require('express')
const { getChatHistory, postChat, postBlog } = require('../controllers/ai')
const router = express.Router()

// GET CHAT HISTORY from /api/ai/history/
router.get('/history', getChatHistory);

// POST CHAT MESSAGE TO api/ai/message/
router.post('/message', postChat);

// POST PAGE BLOG TO api/ai/blog/
router.post('/blog', postBlog);

module.exports = router;