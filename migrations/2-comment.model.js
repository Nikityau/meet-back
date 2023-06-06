module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Comments', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            comment: {
                type: Sequelize.STRING,
                allowNull: false,
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Comments')
    }
}