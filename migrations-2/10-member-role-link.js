module.exports = {
    async up(queryInterface, Sequelize) {
      await queryInterface.createTable('MembersRolesLinks', {
        id: {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
        },
        roleId: {
            type: Sequelize.UUID,
            allowNull: false,
            references: {
              model: 'MembersRoles',
              key: 'id',
            },
        },
        orgMemberId: {
          type: Sequelize.UUID,
          allowNull: false,
          references: {
            model: 'OrganizationsMembers',
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
      await queryInterface.dropTable('MembersRolesLinks');
    },
  };
  