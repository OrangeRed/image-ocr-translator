import Joi from 'joi';
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import User from '../model/user.model.js';

const registerUser = async (name, email, password) => {

  const registerSchema = Joi.object({
    name: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  })

  // Register Validation
  const { validationError } = registerSchema.validate({ name, email, password })
  if (validationError) throw Error(validationError.details[0].message)

  // Check if email exists
  const user = await User.findOne({ email: email })
  if (user) throw Error(`Email, ${ email }, already exists`)

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create new user
  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword
  })

  try {
    const savedUser = await newUser.save()
    return savedUser
  } catch(error) {
    throw(error)
  }
}

const loginUser = async (email, password) => {

  const loginSchema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  })
  
  // Login Validation
  const { validationError } = loginSchema.validate({ email, password })
  if (validationError) throw Error(validationError.details[0].message)

  // Check if email exists
  const user = await User.findOne({ email: email })
  if (!user) throw Error(`Email, ${ email }, does not exist`)

  // Check if password is valid
  const validPassword = await bcrypt.compare(password, user.password)
  if (!validPassword) throw Error('Invalid password')

  // Create and send token
  return jsonwebtoken.sign({ _id: user._id }, process.env.TOKEN_SECRET)
}

const getUser = async (userID) => {
  const user = await User
    .findOne({_id: userID})
    .populate("pages")

  if (!user) throw Error('Unauthorized')

  user.password = undefined

  return user
}

export default { registerUser, loginUser, getUser }