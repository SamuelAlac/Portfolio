const express = require('express');
const { loginUser, getAuthenticatedUser, logoutUser, checkLoginStatus } = require('../controllers/auth');
const authenticatedUser = require('../middlware/auth');
const router = express.Router()

// LOGIN USER to /api/auth/google/secret
router.post('/secret', loginUser)

// GET AUTHENTICATED USER from /api/auth/google/authenticated
router.get('/authenticated', authenticatedUser , getAuthenticatedUser)

// LOGOUT USER to /api/auth/google/logout
router.post('/logout', logoutUser)

// CHECK USER LOGIN STATUS from /api/auth/google/status
router.get('/status', authenticatedUser, checkLoginStatus)

module.exports = router;