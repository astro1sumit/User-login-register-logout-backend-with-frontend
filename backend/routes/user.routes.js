import express from 'express';
import { loginController } from '../controllers/user.controller.js';

const router = express.Router();

// Define the login route
router.post('/login', loginController);

export default router;
