import Sequelize from 'sequelize';
import config from '../config/database';

import Destino from '../app/models/Destino';

const models = [
    Destino
];

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(config);

        models
            .map(model => model.init(this.connection))
            .map(model => model.associate && model.associate(this.connection));
    }

}

export default new Database();