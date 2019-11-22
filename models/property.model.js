const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const propertySchema = Schema({
  title: String,
  slug: String,
  description: String,
  featured: Boolean,
  type:  {
    type: String,
    enum: ['sell', 'rent', 'sell/rent']
  },
  price: Number,
  currency: {
    type: String,
    enum: ['USD', 'ARS']
  }
});

const propertyModel = mongoose.model('properties', propertySchema);

module.exports = propertyModel;
