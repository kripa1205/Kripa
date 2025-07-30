import express from 'express';
import userController from '../controllers/userController.js';
import protect from '../middleware/auth.js';

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile', protect, userController.getUserProfile);

export default router;