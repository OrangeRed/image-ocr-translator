import microsoftComputerVision from 'microsoft-computer-vision'
import fs from 'fs'

// Appending results to req.ocr
const ocr = (req, res, next) => {

  const filePath = req.file.path
  const AZURE_OCR_KEY = process.env.AZURE_OCR_KEY
  const AZURE_OCR_ORIGIN = process.env.AZURE_OCR_ORIGIN

  fs.readFile(filePath, (error, data) => {
    
    if (error) return res.status(400).json({ status: 400, error: error.message })

    microsoftComputerVision.orcImage({
      "Ocp-Apim-Subscription-Key": AZURE_OCR_KEY,
      "request-origin": AZURE_OCR_ORIGIN,
      "language": "en",
      "detect-orientation": true,
      "content-type": "application/octet-stream",
      "body": data

    }).then((result) => {
      req.ocr = result
      next()

    }).catch((error) => {
      return res.status(400).json({ status: 400, error: error.message })
    })
  })
}

export default ocr