var db = require('../models');

// Routes
// =============================================================
module.exports = {
  findAll: function(req, res) {
    db.promotedBooks.findAll({}).then(function(dbpromotedBooks) {
      res.json(dbpromotedBooks);
    });
  },
  create: function(req, res) {
    db.promotedBooks.create({
      title: req.body.title,
      body: req.body.body,
      id: req.body.promotedBookId,
    }).then(function(dbpromotedBooks) {
      res.json(dbpromotedBooks);
    });
  },
};
