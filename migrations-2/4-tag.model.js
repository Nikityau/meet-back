module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Tags', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            tag: {
                type: Sequelize.CHAR(30),
                allowNull: false,
                unique: true,
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
        await queryInterface.dropTable('Tags')
    },
}