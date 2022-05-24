const { Model, DataTYpes } = require("sequelize");
const sequelize = require("../config/connection");

//Travel Model
class Traveller extends Model {}

// create fields/colums for Traveller model
Traveller.init(
  {
    id: {
      type: DataTYpes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTYpes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTYpes.STRING,
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
