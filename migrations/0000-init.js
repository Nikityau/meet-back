/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable('user', {

    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('users');
  }
}