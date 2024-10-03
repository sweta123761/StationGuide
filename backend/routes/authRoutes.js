import express from 'express';
import { registerUser, loginUser, logoutUser, verifyUser } from '../controllers/authController.js';

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Login route
router.post('/login', loginUser);

// Logout route
router.post('/logout', logoutUser);

// Verify route
router.get('/verify', verifyUser);

export default router;