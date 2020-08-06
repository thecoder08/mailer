module.exports = function(auth, mail, callback) {
  require('nodemailer').createTransport({
    service: 'gmail',
    auth: auth
  }).sendMail(mail, callback);
}
