module.exports = {
  up: async (queryInterface, Sequelize) => {await queryInterface.createTable('destino',{
    id:{
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    rua:{
      type: Sequelize.STRING(100),
      allowNull: false
    },
    numeroCasa:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    uf:{
      type: Sequelize.STRING(2),
      allowNull: false
    },
    peso:{
      type: Sequelize.INTEGER,
      allowNull: false
    },
    valor: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  })
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('destino');
  }
};
