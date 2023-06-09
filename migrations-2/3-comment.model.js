module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Comments', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            comment: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            userId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                }
            },
            eventId: {
                type: Sequelize.UUID,
                allowNull: false,
                references: {
                    model: 'Events',
                    key: 'id'
                }
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        })
    },
    async down(queryInterface) {
        await queryInterface.dropTable('Comments')
    },
}