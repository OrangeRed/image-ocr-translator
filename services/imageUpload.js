import multer from 'multer';
import fs from 'fs';
import express, { response } from 'express';
import fetch from 'node-fetch';
import { uuid } from 'uuidv4';

const router = express.Router(); 

// TODO: Move to separate file
// https://stackoverflow.com/a/2117523
// const uuidv4 = () => {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//     var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
//     return v.toString(16);
//   });
// }

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const path = './client';
    // fs.mkdirSync(path, { recursive: true });
    cb(null, path)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname) //+ '-' + uuid() + '-' + Date.now() + '.png')
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
  }
};

const upload = multer({
  fileFilter,
  storage: storage,
}).array('myFile', 1);

router.post(`/`, async (req, res) => {
  const img = req.files.image
  const ext  = img.mimetype.split('/');
  const seed = uuid();
  const name = `image-${seed}.${ext[1]}`;
  img.mv(`client/public/img/${name}`)
  res.json({ 
    'seed': seed,
    'ext': ext[1],
  })
});

export default router;