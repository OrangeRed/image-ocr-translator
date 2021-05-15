import express from 'express'
import UserController from '../controllers/userController.js'
import verifyToken from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/register', UserController.registerUser)
router.post('/login', UserController.loginUser)

// app.use(`/${ endpoint }/collection`, collectionRoute)
router.get('/', verifyToken, UserController.getUser)

// TODO: Add logout
// TODO: Add login/token/refresh, /token/delete

export default router