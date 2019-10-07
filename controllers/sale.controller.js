const propertyModel = require('../models/property.model')
const saleView = require('../views/rent.view')

const renderSaleSection = () => {
  const properties = propertyModel.getPropertiesForSale();
  return saleView.getView({ properties });
}

module.exports = { renderSaleSection }