var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
      user: {type: String, lowercase: true, required: true},
      shipping: {
      	type: String,
      	lowercase: true,
      enum: [
        'normal',
        'express 2-day',
        'overnight'
      ]
    }
});


module.exports = mongoose.model('order', orderSchema);