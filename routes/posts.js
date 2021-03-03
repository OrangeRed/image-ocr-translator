import express from 'express';
import verifyToken from './verifyToken.js'

const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  res.json({ 
    posts: {
      title: 'My first post',
      description: 'Private data'
    }
  });
  
});

export default router;