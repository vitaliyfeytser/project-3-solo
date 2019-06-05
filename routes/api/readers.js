const router = require("express").Router();
const readersController = require("../../controllers/readersController");

// Matches with "/api/readers"
router
  .route("/")
  .get(readersController.findAll)
  .post(readersController.create);

// Matches with "/api/readers/:id"
router
  .route("/:id")
  .get(readersController.findById)
  .put(readersController.update)
  // .delete(readersController.remove);

// Matches with "/api/readers/:email"
router
  .route("/:email")
  .get(readersController.findByEmail)
  .put(readersController.update)
  // .delete(readersController.remove);

module.exports = router;

