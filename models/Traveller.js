const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//Travel Model
class Traveller extends Model {}

// create fields/colums for Traveller model
Traveller.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "traveller",
  }
);

module.exports = Traveller;
