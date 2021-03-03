import express from 'express';
import verifyToken from './verifyToken.js';
import upload from '../services/imageUpload.js';

const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  res.json({ 
    posts: {
      title: 'My first post',
      description: 'Private data'
    }
  });
  
});

router.post('/upload', verifyToken, (req, res) => {
  upload(req, res, (err) => {

    // File upload error checks
    if (err) return res.status(400).send(err.message);
    if (!req.file) return res.status(400).send("No file provided");

    res.send('Successfully uploaded ' + req.file.originalname);
  });
});

export default router;