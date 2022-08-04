const { Photo } = require("../models/Photo");

const seedPhoto = () => Photo.bulkCreate(photodata);

module.exports = seedPhoto;
