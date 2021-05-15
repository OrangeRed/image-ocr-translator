import PageService from '../services/pageService.js'

const createPage = async (req, res) => {

  const { translationLang } = req.body
  const userToken = req.user

  try {
    const page = await PageService.createPage(userToken, translationLang)
    return res.status(200).json({ status: 200, page: page })

  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

const getPage = async (req, res) => {

  const { pageID } = req.body
  const userToken = req.user

  try {
    const page = await PageService.getPage(userToken, pageID)
    return res.status(200).json({ status: 200, page: page })

  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

const updatePage = async (req, res) => {

  const { pageID, translationLang } = req.body
  const userToken = req.user

  try {
    const page = await PageService.updatePage(userToken, pageID, translationLang)
    return res.status(200).json({ status: 200, page: page })

  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

const deletePage = async (req, res) => {

  const { pageID } = req.body
  const userToken = req.user

  try {
    const deleted = await PageService.deletePage(userToken, pageID)
    return res.status(200).json({ status: 200, deleted: deleted })

  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

export default { createPage, getPage, updatePage, deletePage }