import { Router } from 'express';

import clientsRouter from '../../../../modules/users/infra/http/routes/clients.routes';

const routes = Router();

routes.use('/clients', clientsRouter);

export default routes;
