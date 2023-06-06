'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      surname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      birthDay: {
        type: DataType.DATE,
        allowNull: false,
      },
      isReal: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      image: {
        type: DataType.STRING,
        allowNull: true,
      },
      role: {
        type: DataType.STRING,
        allowNull: false,
        defaultValue: 'user',
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
      },
      isNotify: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      canMessage: {
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  },
};
