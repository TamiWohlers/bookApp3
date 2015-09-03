var cart = require('../models/cartModel');
var book = require('../models/Book')

module.exports = {

  create: function(req, res) {
    var newCartDocument = new cart(req.body);
    newCartDocument.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  readAll: function(req, res) {
    console.log('in cartCtrl readAll');
    cart.find()
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send  (result);
    });
  },
  remove: function(req, res) {
    console.log(req.params.id);
    cart.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
      console.log(result);
    });
  },
  read: function(req, res) {
    console.log(req.body);
    book.findOne({title: req.query.title})
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  }
}


