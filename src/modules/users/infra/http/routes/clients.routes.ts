import { Router } from 'express';

import ClientsController from '../controllers/ClientsController';

const clientController = new ClientsController();
const clientsRouter = Router();

clientsRouter.post('/', clientController.create);

export default clientsRouter;
