import jsonwebtoken from 'jsonwebtoken';

// TODO: https://gist.github.com/soulmachine/b368ce7292ddd7f91c15accccc02b8df

// Appending results to req.user
const verifyToken = (req, res, next) => {
  const token = req.header('auth-token')
  
  if (!token) {
    next()
    return
  }

  try {
    const verified = jsonwebtoken.verify(token, process.env.TOKEN_SECRET)
    req.user = verified
    next()
  } catch(error) {
    res.status(400).send('Invalid Token')
  }
}

export default verifyToken