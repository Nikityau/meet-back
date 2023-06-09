module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Events', {
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
            startDate: {
                type: 'TIMESTAMP',
                allowNull: false,
            },
            endDate: {
                type: 'TIMESTAMP',
                allowNull: false,
            },
            place: {
                type: Sequelize.CHAR(30),
                allowNull: false,
            },
            isArchive: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        })
    },
    async down(queryInterface) {
        await queryInterface.dropTable('Events')
    },
}