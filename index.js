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
app.use(`/${ endpoint }/translate`, translateRoute);

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