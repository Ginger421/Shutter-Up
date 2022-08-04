const router = require("express").Router();
const { Photo } = require("../../models/Photo");

// POST request
router.post("/", async (req, res) => {
  try {
    const photoData = await Photo.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    if (!photoData) {
      res.status(404).json({ message: "Image cannot be posted with given ID" });
    }

    res.status(200).json(photoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete request
router.delete("/:id", async (req, res) => {
  try {
    const photoData = await Photo.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!photoData) {
      res
        .status(404)
        .json({ message: "Image cannot be found with the given ID" });
      return;
    }

    res.status(200).json(photoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
