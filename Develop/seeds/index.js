const sequelize = require("../config/connection");
const { User, Photo } = require("../models");

const userData = require("./userData.json");
const photoData = require("./photoData.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const photo of photoData) {
    await Photo.create({
      ...photo,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedAll();
