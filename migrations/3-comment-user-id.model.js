module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
        'Comments', // name of Source model
        'userId', // name of the key we're adding 
        {
          type: Sequelize.UUID,
          references: {
            model: 'Users', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          onUpdate: 'CASCADE',
          onDelete: 'SET NULL',
        }
      );
    },
  
    down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
        'Comments', // name of Source model
        'userId' // key we want to remove
      );
    }
  };