import express from 'express'
import verifyToken from '../middleware/verifyToken.js'
import collectionController from '../controllers/collectionController.js'

const router = express.Router()

router.post('/', verifyToken, collectionController.createCollection)
router.get('/', verifyToken, collectionController.getCollection)
router.put('/', verifyToken, collectionController.updateCollection)
router.delete('/', verifyToken, collectionController.deleteCollection)

export default router