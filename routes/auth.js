import express from 'express';
import bcrypt from 'bcryptjs';
import jsonwebtoken from 'jsonwebtoken';
import User from '../model/User.js';
import { registerValidation, loginValidation } from '../services/validation.js'

const router = express.Router();

// Register
router.post('/register', async (req, res) => {

  // Validation
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if email exists
  const email = req.body.email
  const user = await User.findOne({ email: email });
  if (user) return res.status(400).send(`Email, ${ email }, already exists`);

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create new user
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });

  // Save user
  try {
    const savedUser = await newUser.save();
    res.send({ user: newUser._id });
  } catch(error) {
    res.status(400).send(error);
  }
});

// Login
router.post('/login', async (req, res) => {

  // Validation
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // Check if email exists
  const email = req.body.email
  const user = await User.findOne({ email: email });
  if (!user) return res.status(400).send(`Email, ${ email }, does not exist`);

  // Check if password is valid
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).send('Invalid password');

  // Create and send token
  const token = jsonwebtoken.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).send(token);
})

export default router;