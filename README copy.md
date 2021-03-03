# OCR Translation Web App - Server (Backend)

## Running the Project

```
cd server
npm start
```

<br/>

## API Usage

### Register
Send user credentials to create an account.

#### Request:
```
POST /api/user/register
Content-Type: application/json

{
  "name": "First Last",
  "email": "email@something.com",
  "password": "password123"
}
```

#### Successful Response:
```
200 OK
Content-Type: application/json

{
  "user": "603d7c89b3652d0189803d00"
}
```

#### Failed Response:
```
400 Bad Request
Content-Type: text/html

Email, email@something.com, already exists
```

<br/>

### Login
Send user login credentials and get back an `auth-token`.

#### Request:
```
POST /api/user/login
Content-Type: application/json

{
  "email": "email@something.com",
  "password": "password123"
}
```

#### Successful Response:
```
200 OK
Content-Type: text/html

eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNkNzNhNWIzNjUyZDAxODk4MDNjZmYiLCJpYXQiOjE2MTQ2NDI4MTJ9.5ToonQb03y8o7dzC45lW44Ws2vADxgujuypNInguRv8
```

#### Failed Response:
```
400 Bad Request
Content-Type: text/html

Invalid password
```

<br/>

### Posts
Get posts for user using `auth-token`.

#### Request:
```
GET /api/posts
Content-Type: application/json
auth-token: [auth-token]
```

#### Successful Response:
```
200 OK
Content-Type: application/json

{
  "posts": {
    "title": "My first post",
    "description: "Private Data
  }
}
```

#### Failed Response:
```
400 Bad Request
Content-Type: text/html

Invalid Token
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
