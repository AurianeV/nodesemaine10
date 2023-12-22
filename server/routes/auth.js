// server/routes/auth.js
import express from 'express';
import { loginUser } from '../controllers/authController.js';

const router = express.Router();

// Route de connexion
router.post('/login', loginUser);

export default router;
