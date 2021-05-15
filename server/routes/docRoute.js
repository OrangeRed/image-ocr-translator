import express from 'express'
import docController from '../controllers/docController.js'
import verifyToken from '../middleware/verifyToken.js'
import imageUpload from '../utility/imageUpload.js'

const router = express.Router()

// TODO: Change imageUpload middleware to fileUpload
router.post('/', verifyToken, imageUpload, docController.createDoc)
router.delete('/', verifyToken, docController.deleteDoc)

export default router