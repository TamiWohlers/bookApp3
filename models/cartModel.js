var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({

  Product: {type: String, unique: false, required: true, index: true},
  Title: {type: String, required: true},
  Price: {type: Number, required: true, min:.00}

  });
  // Quantity: {type: Number, required: true, min: 1 }

module.exports = mongoose.model('cart', cartSchema);




