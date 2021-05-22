import express from 'express';
import imageUpload from '../utility/imageUpload.js'
import { uuid } from '../utility/stringUtility.js'
import fs from 'fs'
import microsoftComputerVision from 'microsoft-computer-vision'


const router = express.Router();

// Register
router.post('/', async (req, res) => {

  const AZURE_OCR_KEY = process.env.AZURE_OCR_KEY
  const AZURE_OCR_ORIGIN = process.env.AZURE_OCR_ORIGIN
  
  // Convert dataURL to local image file
  const data = req.body.image.split(',');
  const buff = new Buffer(data[1], 'base64');
  const seed = uuid();
  const filePath = `../client/public/image-${seed}.png`

  // Creates image from received dataURL
  fs.writeFileSync(filePath, buff);

  imageUpload(req, res, (error) => {

    // File upload error checks
    // if (!req.file) return res.status(400).json({ status: 400, error: "No file provided" })
    // if (error) return res.status(400).json({ status: 400, error: error.message })

    fs.readFile(filePath, (error, data) => {
      
      if (error) return res.status(400).json({ status: 400, error: error.message })

      microsoftComputerVision.orcImage({
        "Ocp-Apim-Subscription-Key": AZURE_OCR_KEY,
        "request-origin": AZURE_OCR_ORIGIN,
        "language": "unk", // Auto Detect
        "detect-orientation": true,
        "content-type": "application/octet-stream",
        "body": data
      })
      .then((result) => {
        // delete image after results have been acquired
        fs.unlinkSync(filePath)
        return res.status(200).json({ status: 200, ocrData: result })
      }).catch((error) => {
        // delete image after results have been acquired
        fs.unlinkSync(filePath)
        return res.status(400).json({ status: 400, error: error.message })
      })
    })
  })
  
});

export default router;