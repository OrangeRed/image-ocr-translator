import { createWorker } from 'tesseract.js';
import fs from 'fs';

/*
DOCS:
https://github.com/naptha/tesseract.js/blob/master/docs/api.md#worker-load-language
https://golb.hplar.ch/2019/07/ocr-with-tesseractjs.html
https://betterprogramming.pub/beginners-guide-to-tesseract-ocr-using-python-10ecbb426c3d
*/

const cachePath = './tessdata';

const worker = createWorker({
  cachePath: cachePath,

  // TODO: https://stackoverflow.com/questions/10183998/how-to-connect-formidable-file-upload-to-socket-io-in-node-js
  logger: msg => console.log(msg),
  errorHandler: err => console.log(err)
});

const ocr = async (filePath, lang) => {
  // Check if file exists 
  if (!fs.existsSync(filePath)) return console.log("No file found in the specified path");

  // Create cache directory if one does not exist
  fs.mkdirSync(cachePath, { recursive: true });

  await worker.load();
  await worker.loadLanguage(lang);
  await worker.initialize(lang);

  const data = await worker.recognize(filePath);
  await worker.terminate();

  return data
};

export default ocr;