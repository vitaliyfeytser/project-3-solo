const router = require("express").Router();
const promotedBooksController = require("../../controllers/promotedBooksController");

// Matches with "/api/promotedBooks"
router
  .route("/")
  .get(promotedBooksController.findAll)
  .post(promotedBooksController.create);

// Matches with "/api/promotedBooks/:id"
router
  .route("/:id")
  .get(promotedBooksController.findById)
  .put(promotedBooksController.update)
  // .delete(promotedBooksController.remove);

module.exports = router;
