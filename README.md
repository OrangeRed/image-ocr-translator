# Transients - Image OCR Translator

Upload Images / PDF files and allow the user to look up specific definitions or words.

<br/>

## Installation

To access the project, run the following:
```
git clone --recursive git@github.com:OrangeRed/image-ocr-translator.git
cd image-ocr-translator
```

<br/>

## Setup

### Install dependencies:

```
npm install --prefix ./client
npm install --prefix ./server
```

### Configure environment variables:
Create a `.env` file in the server directory.
```
touch server/.env
```

Open `.env` file with your favorite text editor, copy the code below, and replace the text in brackets (inclusive).
```
CONNECTION_URL = <MONGODB-CONNECTION-URL>
PORT = 5000
TOKEN_SECRET = <TOKEN-SECRET>
AWS_BUCKET_NAME = image-ocr-translator
AWS_ACCESS_KEY_ID = <AWS-ACCESS-KEY-ID>
AWS_SECRET_ACCESS_KEY = <AWS-SECRET-ACCESS-KEY>
AWS_REGION = us-east-1
AZURE_OCR_KEY = <AZURE-OCR-KEY>
AZURE_OCR_ORIGIN = eastus
```

<br/>

## Running the Project
```
npm run dev --prefix ./server
```
Confirm the server is running by visiting `http://localhost:5000` in your web browser.

<br/>

## Notes

Ignore the following MongoDB error if you receive it when starting the server. This [seems](https://developer.mongodb.com/community/forums/t/warning-accessing-non-existent-property-mongoerror-of-module-exports-inside-circular-dependency/15411) to be an issue in the most recent version of mongoose. 

```
(node:40807) Warning: Accessing non-existent property 'MongoError' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:40807) DeprecationWarning: Listening to events on the Db class has been deprecated and will be removed in the next major version.
```

<br/>

If you receive the following error:
```
Error: listen EADDRINUSE: address already in use :::5000

.
.
.

[nodemon] app crashed - waiting for file changes before starting...
```

1. End terminal session:\
<kbd>Ctrl</kbd> + <kbd>D</kbd>

2. Run:
```
npx kill-port 5000
```

<br/>

### API documentation can be found [here](https://github.com/OrangeRed/image-ocr-translator/tree/main/server/API.md).
