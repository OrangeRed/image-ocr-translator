import fs from 'fs';
import {createWorker,createScheduler, setLogging} from 'tesseract.js';
const cachePath = './tessdata';
  if (!fs.existsSync(cachePath)) fs.mkdirSync(cachePath, { recursive: true });



/*
DOCS:
https://github.com/naptha/tesseract.js/blob/master/docs/api.md#worker-load-language
https://golb.hplar.ch/2019/07/ocr-with-tesseractjs.html
https://betterprogramming.pub/beginners-guide-to-tesseract-ocr-using-python-10ecbb426c3d
*/



  // TODO: https://stackoverflow.com/questions/10183998/how-to-connect-formidable-file-upload-to-socket-io-in-node-js

const ocr = async (filePath, lang) => {
  if (!lang) lang='eng';
//setLogging(true);
  const worker = createWorker({
  cachePath: cachePath,
  //logger: msg => console.log(msg),
  //errorHandler: err => console.log(err)
  });
  await worker.load();
  await worker.loadLanguage(lang);
  await worker.initialize(lang);
const { data: { text } } = await worker.recognize(filePath);
  await worker.terminate();
  return(text);
};

export default ocr;
