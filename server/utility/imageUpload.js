import multer from 'multer'
import fs from 'fs'
import { uuid } from '../utility/stringUtility.js'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = './uploads'
    fs.mkdirSync(path, { recursive: true })
    cb(null, path)
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + uuid() + '-' + Date.now())
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true)
  } else {
    cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false)
  }
}

const imageUpload = multer({
  fileFilter,
  storage: storage,
}).single('image')

export default imageUpload