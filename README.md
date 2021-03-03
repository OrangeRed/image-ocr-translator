# Transients - Image OCR Translator

Upload Images / PDF files and allow the user to look up specific definitions or words.

## Installation

To access the project, run the following:
```
git clone --recursive git@github.com:OrangeRed/image-ocr-translator.git
cd image-ocr-translator
```

Install dependencies:

```
npm install
```

Configure environment variable:<br />
Rename `.env.example` file to `.env` and replace all text in brackets (inclusive). It should look something like this:
```
CONNECTION_URL = mongodb+srv://admin:password@cluster0.8fhqr.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
TOKEN_SECRET = zY1hgypILYUw870JWd4wV7TAIMU2K2V9ZYKd9N266LpfFt4TmXEafOtlAOQZWlrMCL
```

<br />

## Running the Project
```
npm start
```

<br />

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

### API documentation can be found [here](https://github.com/OrangeRed/image-ocr-translator/tree/main/API.md).
