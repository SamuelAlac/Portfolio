const express = require('express');
const { getRepository, getContributions } = require('../controllers/github');
const router = express.Router()

// GET ALL REPOSITORY from /api/github/repository/
router.get('/repository', getRepository)

// GET ALL CONTRIBUTION from /api/github/contributions/
router.get('/contributions', getContributions)

module.exports = router;