const express = require('express');
const { loginUser, getAuthenticatedUser, logoutUser, checkLoginStatus } = require('../controllers/auth');
const authenticatedUser = require('../middlware/auth');
const router = express.Router()

// LOGIN USER to /auth/google/secret
router.post('/secret', loginUser)

// GET AUTHENTICATED USER from auth/google/authenticated
router.get('/authenticated', authenticatedUser , getAuthenticatedUser)

// LOGOUT USER to /auth/google/logout
router.get('/logout', logoutUser)

// CHECK USER LOGIN STATUS from /auth/google/status
router.get('/status', authenticatedUser, checkLoginStatus)

module.exports = router;