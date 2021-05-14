import express from 'express';

const router = express.Router();

router.post('/register', UserController.registerUser);

export default router;