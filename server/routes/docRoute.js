import express from 'express'
import docController from '../controllers/docController.js'
import verifyToken from '../middleware/verifyToken.js'
import imageUpload from '../utility/imageUpload.js'

const router = express.Router()

// TODO: Change imageUpload middleware to fileUpload
router.post('/', verifyToken, imageUpload, docController.createDoc)

//- post Document (file, Collection ID, optional user token) returns Document
//	- delete Document (Document ID, optional user token) return Status

export default router