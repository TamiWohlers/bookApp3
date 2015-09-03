var user = require('../models/userModel');

module.exports = {

  create: function(req, res) {
  	console.log("req: ", req.body)
    var newUserDocument = new user(req.body);
    newUserDocument.save(function(err, result) {
      if (err) return res.status(500).send(err);
      res.send(result);
    });
  },

  read: function(req, res) {
  	console.log(req.params);
    user.findOne({user: req.query.user})
    .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  }

}