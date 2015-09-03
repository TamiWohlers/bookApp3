var mongoose = require('mongoose');

var cartSchema = new mongoose.Schema({

  Product: {type: String, unique: false, index: true},
  title: {type: String, required: true},
  price: {type: Number, required: true, min:.00},
  image: {type: String}

  });
  // Quantity: {type: Number, required: true, min: 1 }

module.exports = mongoose.model('cart', cartSchema);




