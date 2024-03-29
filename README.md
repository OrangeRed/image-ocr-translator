# Transients - Image OCR Translator

Upload Image files and extract words to look up their translations.

Here is a [short demo](https://www.youtube.com/watch?v=_gAdCidpmvo) of the website in action.

<br/>

## Installation

To access the project, run the following:
```
git clone --recursive git@github.com:OrangeRed/image-ocr-translator.git
cd image-ocr-translator
```

To build the program, run the following:
```
docker-compose up 
```

After docker builds the website, it can be accessed via `http://localhost:3000/`

<br/>
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

### API documentation can be found [here](https://github.com/OrangeRed/image-ocr-translator/tree/main/API.md).
