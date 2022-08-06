const router = require("express").Router();

const userRoutes = require("./photoRoutes");

router.use("/users", userRoutes);

module.exports = router;
