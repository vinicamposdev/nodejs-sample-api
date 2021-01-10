import { Router } from 'express';

const clientsRouter = Router();

clientsRouter.get('/', (req, res) => {
  res.send('Client search');
});

clientsRouter.post('/', (req, res) => {
  res.send('Client post');
});

const routes = Router();

routes.use('/clients', clientsRouter);

export default routes;
