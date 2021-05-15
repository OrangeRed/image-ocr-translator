import express from 'express'
import docController from '../controllers/docController.js'
import ocr from '../middleware/ocr.js'
import verifyToken from '../middleware/verifyToken.js'

const router = express.Router()

router.post('/', ocr, verifyToken, docController.createDoc)

// TODO: put update a post if user is logged in

export default router