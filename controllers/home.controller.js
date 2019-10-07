const propertyModel = require('../models/property.model')
const homeView = require('../views/home.view')

const renderHomeSection = () => {
  const properties = propertyModel.getPropertiesFeatured();
  return homeView.getView({ properties });
}

module.exports = { renderHomeSection }