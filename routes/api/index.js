const router = require("express").Router();

const scoreRoutes = require("./score");

router.use("/score", scoreRoutes);

module.exports = router;
