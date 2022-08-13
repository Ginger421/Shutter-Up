const sequelize = require("../config/connection");
const User = require("../models/User");
const Photo = require("../models/Photo");

const userDataSeed = require("./userDataSeed.json");
const photoDataSeed = require("./photoDataSeed.js");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userDataSeed);

  // await Photo.bulkCreate(photoDataSeed);

  process.exit(0);
};

seedAll();
