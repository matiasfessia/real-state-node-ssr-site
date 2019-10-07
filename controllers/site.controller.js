const contactCtrl = require('../controllers/contact.controller');
const homeCtrl = require('../controllers/home.controller');
const rentCtrl = require('../controllers/rent.controller');
const saleCtrl = require('../controllers/sale.controller');

const siteView = require('../views/site.view')
const config = require('../config');

const renderSite = (content) => {
  let data = {
    ...content,
    fullHost: config.appHost
  }
  return siteView.getView(data);
}

const renderHomeSection = (req, res) => {
  const content = homeCtrl.renderHomeSection(req, res);
  res.status(200).send(renderSite({ content }));
}

const renderPropertiesForRentSection = (req, res) => {
  const content = rentCtrl.renderRentSection(req, res);
  res.status(200).send(renderSite({ content }));
}

const renderPropertiesForSaleSection = (req, res) => {
  const content = saleCtrl.renderSaleSection(req, res);
  res.status(200).send(renderSite({ content }));
}

const renderContactSection = (req, res) => {
  const content = contactCtrl.renderContact(req, res);
  req.session.destroy(); // clear success sent email message or errors of the form
  res.status(200).send(renderSite({ content }));
};

module.exports = {
  renderSite,
  renderHomeSection,
  renderPropertiesForRentSection,
  renderPropertiesForSaleSection,
  renderContactSection
}
