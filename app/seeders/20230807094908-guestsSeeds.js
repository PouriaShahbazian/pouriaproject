'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return await queryInterface.bulkInsert( "Guests", [
      { name: "Pouria", phoneNumber: "09024584844", createdAt: new Date(), updatedAt: new Date() }
    ] );
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete( "Guests", null, {} );
  }

};
