const db = require("../models");

// Defining methods for the readersController
module.exports = {
  findAll: function (req, res) {
    db.readers.findAll({})
      .then(function (results) {
        res.json(results);
      });
    // res.end();
  },
  findByEmail: function (req, res) {
    db.readers.findAll({
      where: {
        email: req.params.email
      }
    })
      .then(function (results) {
        console.log("----req.params: ", req.params)
        console.log("----response: ", res.json(results))
        return res.json(results);
      });

  },
  findById: function (req, res) {
    db.readers
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.readers
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.readers
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // remove: function(req, res) {
  //   db.readers
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
