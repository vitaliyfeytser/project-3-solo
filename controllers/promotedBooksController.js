const db = require("../models");

// Defining methods for the promotedBooksController
module.exports = {
  findAll: function(req, res) {
    db.promotedBooks.findAll({})
    .then(function (results) {
      res.json(results);
    });
    // res.end();
  },
  findById: function(req, res) {
    db.promotedBooks
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.promotedBooks
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.promotedBooks
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove: function(req, res) {
  //   db.promotedBooks
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
