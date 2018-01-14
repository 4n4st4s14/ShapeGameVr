const router = require("express").Router();
const scoreController = require("../../controllers/scoreController");

// Matches with "/api/scores"
router.route("/test")

  .post(scoreController.create);

module.exports = router;
