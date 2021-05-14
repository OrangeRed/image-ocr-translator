import imageUpload from '../utility/imageUpload.js'
import fs from 'fs'

// Appending results to req.file
const upload = (req, res, next) => {

  imageUpload(req, res, (error) => {

    // File upload error checks
    if (!req.file) return res.status(400).json({ status: 400, error: "No file provided" })
    if (error) return res.status(400).json({ status: 400, error: error.message })

    next()
  })
}

const erase = (req, res, next) => {

  fs.unlink(req.file.path, (error) => {

    if (error) return res.status(400).json({ status: 400, error: error.message })
    req.file.path = null

    next()
  })
}

export default { upload, erase }