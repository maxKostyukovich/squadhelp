'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Contests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bundleId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Bundles',
          key: 'id'
        },
        allowNull: false,
      },
      contestTitle: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
      typeOfContest: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isIn: ["NAME", "LOGO", "TAGLINE"]
        },
      },
      typeOfName: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isIn: ["Company", "Product", 'Project']
        },
      },
      whatBusinessDo: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      styles: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      files: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      cost: {
        type: Sequelize.REAL,
        allowNull: false,
        validate: {
          min: 0,
        }
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
    return queryInterface.dropTable('Contests');
  }
};

//for all contests
// - contest type
// - contest title
// - type of industry
// - what does the business do
// - target customer
// - style
// - additional information
// - file

//Logo & Tagline
// - name of business

//Name
// - type of name

//bundle
// - title like "Logo + Tagline" or "Name + Logo + TagLine" or "Name"
// - userId
// - has many contests
// - has one user

//Contest
// - bundleId



