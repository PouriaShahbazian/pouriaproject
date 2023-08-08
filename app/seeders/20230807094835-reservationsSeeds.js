'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert( "Reservations", [
      { tableId: 1, date: new Date(),time: new Date(), guestId:1,numOfPeople:3,additionalInfo:null,duration:2, createdAt: new Date(), updatedAt: new Date() },
    ] );
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete( "Reservations", null, {} );
  }
};
