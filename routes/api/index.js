const router = require("express").Router();

const { post } = require("./userRoutes");
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);

module.exports = router;


POST https://api.cloudinary.com/v1_1/demo/image/upload
	.then(result => {console.log(result)})
	.catch(error => {console.log(error)});

router.post