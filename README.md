# Mailer
## What is Mailer?
Mailer is a package that uses nodemailer to send emails with gmail.
## Installation
Run the command
```shell
npm i thecoder08-mailer
```
to install Mailer.
## Require
Require with this code:
```javascript
var mail = require('@thecoder08/mailer');
```
## Syntax
```javascript
mail(auth, mail, callback);
```
Where `auth` is an object with properties `user`, your Google account email, and `pass`, your Google account password.  
Where `mail` is an object with properties `to`, the email recipients separated by commas, `subject`, the subject for the email, `text`, the plain text content for the email, and `html`, the HTML content for the email.
Where `callback` is a function with arguments `err`, an error object, and `info`, an info object.
