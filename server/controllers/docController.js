import DocService from '../services/docService.js'

// Extract Text from document
const extractText = async (req, res) => {

  const ocrResult = JSON.parse(JSON.stringify(req.ocr))
  const textRegions = ocrResult.regions

  return res.status(200).json({ status: 200, textRegions: textRegions })
}

export default { extractText }