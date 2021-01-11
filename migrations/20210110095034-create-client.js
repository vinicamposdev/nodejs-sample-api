'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      postal_code: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      city: Sequelize.STRING,
      neighborhood: Sequelize.STRING,
      street: {
        type: Sequelize.STRING,
        allowNull: false
      },
      street_number: Sequelize.STRING,
      complement: Sequelize.STRING,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clients');
  }
};
