const router = require("express").Router();

const { post } = require("./userRoutes");
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

module.exports = router;
