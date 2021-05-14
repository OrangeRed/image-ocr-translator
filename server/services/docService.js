import microsoftComputerVision from 'microsoft-computer-vision'
import fs from 'fs'

const ocr = async (filePath) => {

  const AZURE_OCR_KEY = process.env.AZURE_OCR_KEY
  const AZURE_OCR_ORIGIN = process.env.AZURE_OCR_ORIGIN

  fs.readFile(filePath, function(error, data) {
    microsoftComputerVision.orcImage({
      "Ocp-Apim-Subscription-Key": AZURE_OCR_KEY,
      "request-origin": AZURE_OCR_ORIGIN,
      "language": "en", // AutoDetect
      "detect-orientation": true,
      "content-type": "application/octet-stream",
      "body": data
    }).then((result) => {
      console.log(result)
    }).catch((error) => {
      throw error
    })
  })
}

export default { ocr }