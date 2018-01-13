const router = require("express").Router();
const articleRoutes = require("./user");
const nytRoutes = require("./score");

// NYT routes
router.use("/user", userRoutes);

router.use("/score", scoreRoutes);

module.exports = router;
