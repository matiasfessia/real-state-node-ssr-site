const siteView = require('../views/site.view')

const renderSite = (content) => {
  return siteView.getView({ content });
}

module.exports = { renderSite }