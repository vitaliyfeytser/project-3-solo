const db = require("../models");

// Defining methods for the bookClubsController
module.exports = {
  findAll: function(req, res) {
    db.bookClubs.findAll({})
    .then(function (results) {
      res.json(results);

      
    });
    console.log("------hey-hey", res.json(results))
    // res.end();
  },
  findById: function(req, res) {
    db.bookClubs
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.bookClubs
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.bookClubs
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove: function(req, res) {
  //   db.bookClubs
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
