import express from 'express'
import DocController from '../controllers/docController.js'
import doc from '../middleware/doc.js'
import ocr from '../middleware/ocr.js'

const router = express.Router()

router.post('/extract', doc.upload, ocr, doc.erase, DocController.extractText)

export default router