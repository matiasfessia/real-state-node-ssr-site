const contactView = require('../views/contact.view')

// GET
const renderContact = (req, res) => contactView.getView(req.session);

// POST
const sendMessageContact = (req, res) => {
  // 1 data validation
  let errors = [];
  if (typeof req.body.email === 'undefined' || req.body.email.length === 0) {
    errors.push('email es requerido')
  }
  req.session.errors = errors;

  // 2 send email
  // @todo send the email using a service as sendgrid or local smpt with nodemail
  if (errors.length === 0 ) {
    req.session.messageSent = true;
  }

  // 3 redirect
  res.redirect('/contacto');
}

module.exports = {
  renderContact,
  sendMessageContact
}