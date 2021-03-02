# Image OCR Translator

Upload Images / PDF files and allow the user to look up specific definitions or words.

<br />

## Installation

To access the project, run the following:
```
git clone --recursive git@github.com:OrangeRed/Image-OCR-Translator.git
cd Image-OCR-Translator
```

<br />

Install dependencies and configure back-end:

#### Backend (Server)
```
cd server
npm install
touch .env
```

Open .env file with a text editor and add the following:
```
CONNECTION_URL=[MongoDB Database URI]
PORT=5000
TOKEN_SECRET=[Token Secret]
```

<br />

Instructions for running [client](https://github.com/OrangeRed/Image-OCR-Translator/tree/main/client) and [server](https://github.com/OrangeRed/Image-OCR-Translator/tree/main/server) can be found in their respective directory.
