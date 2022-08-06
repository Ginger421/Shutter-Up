const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Photo extends Model {}

Photo.init({});

module.exports = Photo;
