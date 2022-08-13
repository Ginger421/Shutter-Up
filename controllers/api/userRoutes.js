const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

//creating new user
router.post("/", async (req, res) => {
  console.log("test" + User);
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });

    if (!userData) {
      res
        .status(404)
        .json({ message: "Error, Incorrect username or password entered" });
      return;
    }
    const correctPw = await bcrypt.compare(
      req.body.password,
      userData.password
    );
    if (!correctPw) {
      res
        .status(404)
        .json({ message: "Error, Incorrect username or password entered" });
      return;
    }
    req.session.save(() => {
      // req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.cookie;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in" });

      // res.render("homepage");
    });
  } catch (err) {
    console.log(err);
    res.status(404).json(err);
  }
});

module.exports = router;
