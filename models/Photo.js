const { Model, DataTypes } = require("sequelize");
<<<<<<< HEAD
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

=======
// const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Photo extends Model {}

Photo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    album_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "username",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "photo",
  }
);

>>>>>>> 60e3dcb20d31bff834644f2fddbb430ea2660f82
module.exports = Photo;
