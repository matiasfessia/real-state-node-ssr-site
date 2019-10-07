const propertyModel = require('../models/property.model')
const rentView = require('../views/rent.view')

const renderRentSection = () => {
  const properties = propertyModel.getPropertiesForRent();
  return rentView.getView({ properties });
}

module.exports = { renderRentSection }