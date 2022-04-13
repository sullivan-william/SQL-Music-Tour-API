'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      mmet_greet_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      meet_start_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      meet_end_time: {
        type: Sequelize.DATE,
        allowNull: false
      },
      band_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      event_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};