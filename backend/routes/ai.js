const express = require('express')
const { getChatHistory, postChat, postBlog, getBlog } = require('../controllers/ai')
const router = express.Router()

// GET CHAT HISTORY FROM /api/ai/history/
router.get('/history', getChatHistory);

// POST CHAT MESSAGE TO /api/ai/message/
router.post('/message', postChat);

// POST PAGE BLOG TO /api/ai/blog/
router.post('/blog', postBlog);

// GET PAGE BLOG FROM /api/ai/blog
router.get('/blog', getBlog)

module.exports = router;