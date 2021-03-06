import express from 'express';
import verifyToken from './verifyToken.js';
import upload from '../services/imageUpload.js';
import ocr from '../services/ocr.js';

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

    // TODO: https://github.com/naptha/tesseract.js/blob/master/src/constants/languages.js
    ocr(req.file.path, 'eng')
    .then((job) => {
      // TODO: Upload to AWS S3
      // TODO: Save AWS link and job data to database

      res.send(job.data.text);
    })
    .catch((err) => {
      return res.status(400).send(err.message);
    });
  });
});

export default router;