import { Router } from 'express';
//import { Route } from "react-router-dom";
import DestinoController from '../controller/DestinoController';
import Home from '../../pages/home';

const routes = new Router();

/*<Route path="/" exact component={Home} />*/
routes.get('./home', Home);
routes.get('/destino', DestinoController.index)
routes.post('/adicionar', DestinoController.store);

export default routes;