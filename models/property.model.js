const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PropertySchema = Schema({
  description: String,
  type: String,
  price: String,
  featured: Boolean
});

const propertyModel = mongoose.model('properties', PropertySchema);

module.exports = propertyModel;
