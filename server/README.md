# API Documentation

## Register
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

## Login
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

## Languages

```
unk (AutoDetect)
zh-Hans (ChineseSimplified)
zh-Hant (ChineseTraditional)
cs (Czech)
da (Danish)
nl (Dutch)
en (English)
fi (Finnish)
fr (French)
de (German)
el (Greek)
hu (Hungarian)
it (Italian)
Ja (Japanese)
ko (Korean)
nb (Norwegian)
pl (Polish)
pt (Portuguese,
ru (Russian)
es (Spanish)
sv (Swedish)
tr (Turkish)
```