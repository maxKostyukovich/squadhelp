'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bundles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id'
        },
        allowNull: false,
      },
      bundleType: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      typeOfIndustry: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      targetCustomers: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      isComplete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      isPaid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bundles');
  }
};
