var book = require('../models/Book');

module.exports = {

  create: function(req, res) {
    var newBookDocument = new book(req.body);
    newBookDocument.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  readAll: function(req, res) {
    // console.log('in bookCtrl readAll');
    book.find()
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send  (result);
    });
  },

  read: function(req, res) {
    console.log(req.query.title);
    book.findOne({title: req.query.title})
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  update: function(req, res) {
    book.findByIdAndUpdate(
      req.params.id,
      req.body,
      function(err, result) {
        if (err) return res.status(500).send(err);
        res.send(result);
    });
  },

  remove: function(req, res) {
    console.log(req.params.id);
    book.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  } 
  

};
