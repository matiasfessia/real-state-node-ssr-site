const propertyModel = require('../models/property.model');
const rentView = require('../views/rent.view');

const renderRentSection = async (req, res) => {
  try {
    const properties = await propertyModel.find();
    return rentView.getView(properties);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { renderRentSection }