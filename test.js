import ocr from './services/ocr.js';
const txt = await ocr('./img.jpg','eng');
console.log('text: '+txt);
