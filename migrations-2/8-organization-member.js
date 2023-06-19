module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('OrganizationsMembers', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        organizationId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: 'Organizations',
              key: 'id',
            },
        },
        userId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: 'Users',
              key: 'id',
            },
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
      await queryInterface.dropTable('OrganizationsMembers');
    },
  };
  