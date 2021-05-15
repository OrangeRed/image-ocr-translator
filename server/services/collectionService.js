import Joi from 'joi'
import Collection from '../model/collectionModel.js'
import User from '../model/user.model.js'

const createCollection = async (userToken, translationLang) => {

  const user = await User.findOne({_id: userToken})
  const userID = userToken != undefined ? userToken._id : undefined

  const collectionSchema = Joi.object({
    translationLang: Joi.string()
      .min(6)
      .required(),
  })

  // Collection Validation
  const { validationError } = collectionSchema.validate({ translationLang })
  if (validationError) throw Error(validationError.details[0].message)

  // Create new collection
  const newCollection = new Collection({
    translationLang: translationLang,
    user: userID
  })

  try {
    const savedCollection = await newCollection.save()
    if (user) {
      user.collections.push(savedCollection)
      await user.save()
    }

    return savedCollection
  } catch(error) {
    throw(error)
  }
}

const getCollection = async (userToken, collectionID) => {
  const collection = await Collection.findOne({_id: collectionID})

  if (!collection) throw Error('Collection not found')

  const userID = userToken != undefined ? userToken._id : undefined
  if (collection.user != userID) throw Error('Unauthorized')

  collection.user = undefined

  return collection
}

const updateCollection = async (userToken, collectionID, translationLang) => {
  const collection = await Collection.findOne({_id: collectionID})
  if (!collection) throw Error('Collection not found')

  if (!translationLang) throw Error('A new translation language is required')

  const userID = userToken != undefined ? userToken._id : undefined
  if (collection.user != userID) throw Error('Unauthorized')

  try {
    collection.translationLang = translationLang
    await collection.save()
    return collection

  } catch(error) {
    throw(error)
  }
}

const deleteCollection = async (userToken, collectionID) => {
  const collection = await Collection.findOne({_id: collectionID})
  if (!collection) throw Error('Collection not found')

  const userID = userToken != undefined ? userToken._id : undefined
  if (collection.user != userID) throw Error('Unauthorized')

  try {
    collection.remove()
    return await Collection.findOne({_id: collectionID}) == undefined

  } catch(error) {
    throw(error)
  }
}

export default { createCollection, getCollection, updateCollection, deleteCollection }