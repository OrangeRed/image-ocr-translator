import Joi from 'joi'
import Page from '../model/pageModel.js'
import User from '../model/user.model.js'

const createPage = async (userToken, translationLang) => {

  const user = await User.findOne({_id: userToken})
  const userID = userToken != undefined ? userToken._id : undefined

  const pageSchema = Joi.object({
    translationLang: Joi.string()
      .min(6)
      .required(),
  })

  // Page Validation
  const { validationError } = pageSchema.validate({ translationLang })
  if (validationError) throw Error(validationError.details[0].message)

  // Create new page
  const newPage = new Page({
    translationLang: translationLang,
    user: userID
  })

  try {
    const savedPage = await newPage.save()
    if (user) {
      user.pages.push(savedPage)
      await user.save()
    }

    return savedPage
  } catch(error) {
    throw(error)
  }
}

const getPage = async (userToken, pageID) => {
  const page = await Page
    .findOne({_id: pageID})
    .populate("documents")

  if (!page) throw Error('Page not found')

  const userID = userToken != undefined ? userToken._id : undefined
  if (page.user != userID) throw Error('Unauthorized')

  page.user = undefined

  return page
}

const updatePage = async (userToken, pageID, translationLang) => {
  const page = await Page.findOne({_id: pageID})
  if (!page) throw Error('Page not found')

  if (!translationLang) throw Error('A new translation language is required')

  const userID = userToken != undefined ? userToken._id : undefined
  if (page.user != userID) throw Error('Unauthorized')

  try {
    page.translationLang = translationLang
    await page.save()
    return page

  } catch(error) {
    throw(error)
  }
}

const deletePage = async (userToken, pageID) => {
  const page = await Page.findOne({_id: pageID})
  if (!page) throw Error('Page not found')

  const userID = userToken != undefined ? userToken._id : undefined
  if (page.user != userID) throw Error('Unauthorized')

  try {
    page.remove()
    const deleted = await Page.findOne({_id: pageID}) == undefined
    return deleted

  } catch(error) {
    throw(error)
  }
}

export default { createPage, getPage, updatePage, deletePage }