const siteView = require('../views/site.view')
const config = require('../config');

const renderSite = (content) => {
  let data = {
    ...content,
    fullHost: config.appHost
  }
  return siteView.getView(data);
}

module.exports = { renderSite }
