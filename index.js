import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import authRoute from './routes/auth.js';
import postRoute from './routes/posts.js';
import translateRoute from './routes/translate.js';

dotenv.config();

const app = express();
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('client'));

// Route Middleware
const endpoint = 'api';
app.use(`/${ endpoint }/user`, authRoute);
app.use(`/${ endpoint }/posts`, postRoute);
<<<<<<< HEAD
app.use(`/${ endpoint }/translate`, translateRoute);
=======


// Google Translate API call
app.get('/api/translate/google/:source/:target/:input', async (request, response) => {
  const source = request.params.source;
  const target = request.params.target;
  const input = request.params.input;

  const google_translate_url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${source}&tl=${target}&dt=t&q=${input}`;
  const google_translate = await fetch(google_translate_url)
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
app.get('/api/translate/myMemory/:source/:target/:input', async (request, response) => {
  const source = request.params.source;
  const target = request.params.target;
  const input = request.params.input;

  // myMemory API call
  const myMemory_url = `https://api.mymemory.translated.net/get?q=${input}&langpair=${source}|${target}`;
  const myMemory = await fetch(myMemory_url)
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
app.get('/api/translate/libre/:source/:target/:input', async (request, response) => {  
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
>>>>>>> main

// Handles any requests that don't match
app.get('*', (_, res) => {
  // TODO: Add a 404 not found page
  res.sendFile('client/index.html', { root: '.' });
});

// Connect to Database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  // Listen for server connections
  .then(() => app.listen(PORT, () => console.log(`Server running on port: ${ PORT }`)))
  .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);