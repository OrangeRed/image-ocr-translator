import express from 'express'
import verifyToken from '../middleware/verifyToken.js'
import pageController from '../controllers/pageController.js'

const router = express.Router()

router.post('/', verifyToken, pageController.createPage)
router.get('/', verifyToken, pageController.getPage)
router.put('/', verifyToken, pageController.updatePage)
router.delete('/', verifyToken, pageController.deletePage)

export default router