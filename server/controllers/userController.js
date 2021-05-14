import UserService from '../services/userService.js'

// Register
const registerUser = async (req, res) => {

  const { name, email, password } = req.body

  try {
    await UserService.registerUser(name, email, password)
    const authToken = await UserService.loginUser(email, password)

    return res.status(200).json({ status: 200, authToken: authToken })
  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

// Login
const loginUser = async (req, res) => {

  const { email, password } = req.body

  try {
    const authToken = await UserService.loginUser(email, password)
    return res.status(200).json({ status: 200, authToken: authToken })
  } catch (error) {
    return res.status(400).json({ status: 400, error: error.message })
  }
}

export default { registerUser, loginUser }