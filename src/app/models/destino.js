import { DataTypes } from "sequelize";
import sequelize from '../../database/index';

const Destino = sequelize.define(
    'destino',
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          rua:{
            type: DataTypes.STRING(100),
            allowNull: false
          },
          numeroCasa:{
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          uf:{
            type: DataTypes.STRING(2),
            allowNull: false
          },
          peso:{
            type: DataTypes.INTEGER,
            allowNull: false
          },
          valor: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
    }
)

export default Destino;