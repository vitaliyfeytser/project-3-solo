const router = require("express").Router();
const readersRoutes = require("./readers");
const promotedBooksRoutes = require("./promotedBooks");
const bookClubsRoutes = require("./bookClubs");

// Book routes
router.use("/readers", readersRoutes);
router.use("/promotedBooks", promotedBooksRoutes);
router.use("/bookClubs", bookClubsRoutes);

module.exports = router;
