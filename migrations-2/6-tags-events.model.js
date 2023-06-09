module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('TagsEvents', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            eventId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            tagId: {
                type: Sequelize.UUID,
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
        })
    },
    async down(queryInterface) {
        await queryInterface.dropTable('TagsEvents')
    },
}