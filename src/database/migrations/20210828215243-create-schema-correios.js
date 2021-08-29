module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createSchema('correios');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropSchema('correios');

  }
}