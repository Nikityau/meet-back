module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('MembersRoles', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        role: {
            type: Sequelize.ENUM('user', 'creator', 'admin'),
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
      await queryInterface.dropTable('MembersRoles');
    },
  };
  