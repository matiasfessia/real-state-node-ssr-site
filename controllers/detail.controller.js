const propertyModel = require('../models/property.model');
const detailView = require('../views/detail.view');

const renderDetailSection = async (req, res) => {
  try {
    const { id } = req.params;
    const property = await propertyModel.findById(id);
    return detailView.getView(property);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { renderDetailSection }