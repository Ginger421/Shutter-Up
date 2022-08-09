const User = require("./User");
const Photo = require("./Photo");

User.hasMany(Photo, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Photo.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Photo };
