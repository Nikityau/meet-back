module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('Organizations', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        title: {
            type: Sequelize.CHAR(256),
            allowNull: false,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false,
        },
      });
    },
    async down(queryInterface) {
      await queryInterface.dropTable('Organizations');
    },
  };
  