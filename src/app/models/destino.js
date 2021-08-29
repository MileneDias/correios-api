import Sequelize, { Model } from "sequelize";

class Destino extends Model {
  static init(sequelize){
    super.init({
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
    },
    {
      sequelize,
      schema: 'correios',
      tableName: 'destino'
    })
  }
}

export default Destino;