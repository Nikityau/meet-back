module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                primaryKey: true,
            },
            name: {
                type: Sequelize.CHAR(30),
                allowNull: false,
            },
            surname: {
                type: Sequelize.CHAR(30),
                allowNull: false,
            },
            patronymic: {
                type: Sequelize.CHAR(30),
                allowNull: true,
                defaultValue: null,
            },
            gender: {
                type: Sequelize.ENUM('male', 'female'),
                allowNull: false,
            },
            birthDay: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            role: {
                type: Sequelize.ENUM('user', 'moderator', 'admin'),
                allowNull: false,
                defaultValue: 'user',
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            isNotify: {
                type: Sequelize.BOOLEAN,
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
        })
    },
    async down(queryInterface) {
        await queryInterface.dropTable('Users');
    }
}