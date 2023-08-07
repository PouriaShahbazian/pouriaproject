'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Guests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        Guests.belongsTo(models.Reservation,{
            foreignKey: 'id',
            onDelete: 'CASCADE'
        });
    }
  }
  Guests.init({
    name: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Guests',
  });
  return Guests;
};
