const router = require("express").Router();
const { User } = require("../../models");

//creating new user
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.user,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({
      where: { name: req.body.username },
    });

    if (!userData) {
      res
        .status(404)
        .json({ message: "Error, Incorrect username or password entered" });
      return;
    }
    const correctPw = await userData.checkPassword(req.body.password);
    if (!correctPw) {
      res
        .status(404)
        .json({ message: "Error, Incorrect username or password entered" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.render("homepage");
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

module.exports = router;
