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

const createDoc = async (userToken, pageID, file) => {
  const page = await Page.findOne({_id: pageID})
  if (!page) throw Error('Page not found')

  const userID = userToken != undefined ? userToken._id : undefined
  if (page.user != userID) throw Error('Unauthorized')

  if (!file) throw Error('Invalid file provided')

  // TODO: Save to AWS and return link
  const fileURL = "AWS-URL-TEMP.com"

  // Delete file from local storage
  fs.unlinkSync(file.path)

  const newDoc = new Doc({
    fileType: file.mimetype,
    fileUrl: fileURL,
    page: page._id
  })

  try {
    const savedDoc = await newDoc.save()
    page.documents.push(savedDoc)
    await page.save()

    return savedDoc
  } catch(error) {
    throw(error)
  }
}

const deleteDoc = async (userToken, docID) => {
  const doc = await Doc.findOne({_id: docID})
  if (!doc) throw Error('Document not found')

  const page = await Page.findOne({_id: doc.page})
  if (!page) throw Error('Associated page not found')

  const userID = userToken != undefined ? userToken._id : undefined
  if (page.user != userID) throw Error('Unauthorized')

  // TODO: Delete file on AWS

  try {
    doc.remove()
    const deleted = await Doc.findOne({_id: docID}) == undefined
    return deleted

  } catch(error) {
    throw(error)
  }
}

export default { createDoc, deleteDoc }