import express from 'express';
import translate from 'translate';
import fetch from 'node-fetch';

const translator = express.Router();

// Google Translate API call
translator.get('/google/:source/:target/:input', async (request, response) => {
    const source = request.params.source;
    const target = request.params.target;
    const input = request.params.input;

    const google_translate_url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${input}`;
    const google_translate = await fetch(encodeURI(google_translate_url))
    .then(async response => {
        const google_translate_json = await response.json();
        return google_translate_json[0][0][0];
    })
    .catch(err => {
        console.log("\nGoogle translate error");
        console.log(err);
        return "";
    });

    response.json(google_translate);
});

// MyMemory Translate API call
translator.get('/myMemory/:source/:target/:input', async (request, response) => {
    const source = request.params.source;
    const target = request.params.target;
    const input = request.params.input;

    // myMemory API call
    const myMemory_url = `https://api.mymemory.translated.net/get?q=${input}&langpair=${source}|${target}`;
    const myMemory = await fetch(encodeURI(myMemory_url))
    .then(async response => {
        const myMemory_json = await response.json();
        return myMemory_json.responseData.translatedText;
    })
    .catch(err => {
        console.log("\nmyMemory error");
        console.log(err);
        return "";
    });

    response.json(myMemory);
});

// Libre Translate call 
translator.get('/libre/:source/:target/:input', async (request, response) => {  
    const source = request.params.source;
    const target = request.params.target;
    const input = request.params.input;

    const libre = await translate(input, { 
        to: target, 
        from: source,
        engine: "libre"
    })
    .catch(err => {
        console.log("\nLibre error");
        console.log(err);
        return "";
    });

    response.json(libre);
});

export default translator;