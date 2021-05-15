import DocService from '../services/docService.js'
import imageUpload from '../utility/imageUpload.js'

// Extract Text from document
// const tmpCreateDoc = async (req, res) => {

//   // TODO: throw error is no lang provided
//   const lang = req.lang || 'en'

//   // TODO: try/catch JSON.parse ?
//   const ocrData = JSON.parse(JSON.stringify(req.ocr))
//   const document = DocService.createDoc(ocrData, lang)

//   if (req.user) {
//     // User is logged in

//     // TODO: save to aws and update doc
//     // TODO: add id to doc and append to user documents - save to mongoDB
//     console.log("logged in") 
//   }

//   return res.status(200).json({ status: 200, document: document })
// }

const createDoc = async (req, res) => {

  const pageID = req.header('pageID')
  const userToken = req.user
  const file = req.file

  try {
    const doc = await DocService.createDoc(userToken, pageID, file)
    return res.status(200).json({ status: 200, document: doc })

  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

const deleteDoc = async (req, res) => {

  const { docID } = req.body
  const userToken = req.user

  try {
    const deleted = await DocService.deleteDoc(userToken, docID)
    return res.status(200).json({ status: 200, deleted: deleted })

  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

export default { createDoc, deleteDoc }