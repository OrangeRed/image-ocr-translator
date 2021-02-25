# OCR Translation Web App - Server (Backend)

## Running the Project

```
cd server
npm start
```

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