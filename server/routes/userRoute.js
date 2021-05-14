import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);

// TODO: Add logout
// TODO: Add login/token/refresh, /token/delete

export default router;