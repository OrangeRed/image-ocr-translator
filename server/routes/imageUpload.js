import multer from 'multer';
import fs from 'fs';
import express, { response } from 'express';
import { uuid } from 'uuidv4';

const router = express.Router(); 

router.post(`/`, (req, res) => {
  const img = req.files.image
  const ext  = img.mimetype.split('/');
  const seed = uuid();
  const name = `image-${seed}.${ext[1]}`;
  img.mv(`../client/public/img/${name}`)
  res.json({ 
    'seed': seed,
    'ext': ext[1],
  })
});

export default router;