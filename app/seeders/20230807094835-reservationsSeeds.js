'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert( "Posts", [
      { tableId: "1", date: new Date(), userId: 1, createdAt: new Date(), updatedAt: new Date() },
      { title: "Josh's second post", content: "I can and shall obey", userId: 1, createdAt: new Date(), updatedAt: new Date() }
    ] );
  },
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete( "Posts", null, {} );
  }
};
