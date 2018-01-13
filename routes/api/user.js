const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches user
router
  .route("/")
  .get(userController.findAll)

module.exports = router;
