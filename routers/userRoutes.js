const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// User registration
router.post('/register', userController.registerUser);

// User login
router.post('/login', userController.loginUser);

// Get user info (protected route)
router.get('/me', authMiddleware, userController.getUserInfo);

module.exports = router;

