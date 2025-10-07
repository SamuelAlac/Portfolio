const express = require('express');
const { getRepository, getContributions, getRepositoryInfo } = require('../controllers/github');
const router = express.Router()

// GET ALL REPOSITORY from /api/github/repository/
router.get('/repository', getRepository)

// GET REPOSITORY & README from api/github/repository/repo & api/github/repository/repo/readme
router.get('/repository/:repo', getRepositoryInfo)

// GET ALL CONTRIBUTION from /api/github/contributions/
router.get('/contributions', getContributions)

module.exports = router;