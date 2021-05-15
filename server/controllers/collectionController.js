import CollectionService from '../services/collectionService.js'

const createCollection = async (req, res) => {

  const { translationLang } = req.body
  const userToken = req.user

  try {
    const collection = await CollectionService.createCollection(userToken, translationLang)
    return res.status(200).json({ status: 200, collection: collection })

  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

const getCollection = async (req, res) => {

  const { collectionID } = req.body
  const userToken = req.user

  try {
    const collection = await CollectionService.getCollection(userToken, collectionID)
    return res.status(200).json({ status: 200, collection: collection })

  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

const updateCollection = async (req, res) => {

  const { collectionID, translationLang } = req.body
  const userToken = req.user

  try {
    const collection = await CollectionService.updateCollection(userToken, collectionID, translationLang)
    return res.status(200).json({ status: 200, collection: collection })

  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

const deleteCollection = async (req, res) => {

  const { collectionID } = req.body
  const userToken = req.user

  try {
    const deleted = await CollectionService.deleteCollection(userToken, collectionID)
    return res.status(200).json({ status: 200, deleted: deleted })

  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

export default { createCollection, getCollection, updateCollection, deleteCollection }