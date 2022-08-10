const router = require("express").Router();
const { Photo } = require("../../models");

//GET request for All photos
// router.get("/", async (req, res) => {
//   try {
//     const photoData = await Photo.findAll({
//       // include: [
//       //   {//
//       //     model: Painting,
//       //     attributes: ['filename', 'description'],
//       //   },
//       // ], !!!! add info from db
//     });

//     const galleries = photoData.map((gallery) => gallery.get({ plain: true }));
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

//GET request for one album
// router.get("/gallery/:id", async (req, res) => {
//   try {
//     const photoData = await Gallery.findByPk(req.params.id, {
//       include: [
//         //   {
//         //     model: Painting,
//         //     attributes: [
//         //       'id',
//         //       'title',
//         //       'artist',
//         //       'exhibition_date',
//         //       'filename',
//         //       'description',
//         //     ],
//         //   },
//       ],
//     });
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// GET request for one photo
router.get("/image/:id", async (req, res) => {
  try {
    const photoData = await Photo.findByPk(req.params.id);

    const image = photoData.get({ plain: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

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

//Delete request
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
