# API Documentation

## User/Register
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

## User/Login
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

## User/
Get user for corresponding `auth-token`.

#### Request:
```
GET /api/user/
Content-Type: application/json
auth-token: auth-token

```

<br/>

## Collection/

Create a collection
```
POST /api/collection/
Content-Type: application/json
auth-token: auth-token (optional)

{
  "translationLang": "en"
}
```

Get a collection
```
GET /api/collection/
Content-Type: application/json
auth-token: auth-token (optional)

{
  "collectionID": "609f16b9bf97e41a523d486c"
}
```

Update a collection
```
PUT /api/collection/
Content-Type: application/json
auth-token: auth-token (optional)

{
  "collectionID": "609f16b9bf97e41a523d486c",
  "translationLang": "en"
}
```

Delete a collection
```
DELETE /api/collection/
Content-Type: application/json
auth-token: auth-token (optional)

{
  "collectionID": "609f16b9bf97e41a523d486c"
}
```

<br/>

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