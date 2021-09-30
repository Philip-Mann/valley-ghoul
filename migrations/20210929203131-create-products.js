'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      product_name: {
        type: Sequelize.STRING
      },
      product_type: {
        type: Sequelize.STRING
      },
      product_price: {
        type: Sequelize.STRING
      },
      product_colors: {
        type: Sequelize.STRING
      },
      product_quantity: {
        type: Sequelize.STRING
      },
      product_image: {
        type: Sequelize.STRING
      },
      product_description: {
        type: Sequelize.TEXT
      },
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
    await queryInterface.dropTable('Products');
  }
};