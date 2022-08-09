const router = require("express").Router();
const { User } = require("../../models");

//creating new user
router.post('/', async (req, res) => {
  try {
    const userInfo = await User.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.logged_in = true;

      res.status(200).json(userInfo);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const userInfo = await User.findOne({ where: { username: req.body.username } });

    if (!userInfo) {
      res
        .status(404)
        .json({ message: "Error, Incorrect username or password entered" });
      return;
    }
    const correctPw = await userInfo.checkPassword(req.body.password);
    if (!correctPw) {
      res
        .status(404)
        .json({ message: "Error, Incorrect username or password entered" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userInfo.id;
      req.session.logged_in = true;

      res.json({ user: userInfo, message: "You're logged in!" });
    });
  } catch (err) {
    res.status(404).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
