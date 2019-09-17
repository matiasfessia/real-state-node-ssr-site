const propertyModel = require('../models/property.model')
const homeView = require('../views/home.view')

const renderHome = () => {
  const featureProperties = propertyModel.getFeatureProperties();
  return homeView.getView({ featureProperties });
}

module.exports = { renderHome }