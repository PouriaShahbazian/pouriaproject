'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class reservation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Reservations.hasMany(models.Guests,{
          foreignKey: 'guestsId',
          as: 'guest',
      });
    }
  }
  reservation.init({
    tableId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    time: DataTypes.DATE,
    guestId: DataTypes.INTEGER,
    numOfPeople: DataTypes.INTEGER,
    additionalInfo: DataTypes.STRING,
    duration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'reservation',
  });
  return reservation;
};
