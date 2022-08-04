const sequelize = require("../config/connection");

const seedPhoto = require("./photoData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPhoto();

  process.exit(0);
};

seedAll();
