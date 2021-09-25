import express from 'express';

import DestinoRoute from './app/routes/destino';
import './database/index';

class App {
    constructor(){
        this.server = express();
        this.config();
        this.routers();
    }

    config(){
        this.server.use(express.json()); //receber json no body
    }

    middlewares(){

    }

    routers(){
        this.server.use(DestinoRoute);
    }
}

export default new App().server;