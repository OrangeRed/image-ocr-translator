import Page from '../model/pageModel.js'
import Doc from '../model/docModel.js'
import fs from 'fs'

// const createDoc = (ocrData, lang) => {
//   const document = {
//     "translateLang": lang,
//     "originalLang": ocrData.language,
//     "lines": ocrData.regions[0].lines
//   }

//   // TODO: Translate document lines.words
//   document.translateLang = lang

//   return document
// }

const createDoc = async (userToken, pageID, filePath) => {
  const page = await Page.findOne({_id: pageID})
  if (!page) throw Error('Page not found')

  const userID = userToken != undefined ? userToken._id : undefined
  if (collection.user != userID) throw Error('Unauthorized')

  if (!filePath) throw Error('Invalid file provided')

  const fileType = ".temp"

  // TODO: Save to AWS and return link
  const fileURL = "AWS-URL-TEMP"

  const newDoc = new Doc({
    fileType: fileType,
    fileURL: fileURL,
    page: pageID._id
  })

  try {
    const savedDoc = await newDoc.save()
    page.documents.push(savedDoc)

    // Delete file from local storage
    fs.unlinkSync(filePath)

    return savedDoc
  } catch(error) {
    throw(error)
  }
}

export default { createDoc }