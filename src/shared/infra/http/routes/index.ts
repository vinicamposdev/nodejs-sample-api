import { Router } from 'express';
import User from '@shared/infra/sequelize/models/client';

const clientsRouter = Router();

clientsRouter.get('/', async (req, res) => {
  const foundUser = await User.findAll();

  res.json(foundUser);
});

clientsRouter.post('/', async (req, res) => {
  res.json('Client post');
});

const routes = Router();

routes.use('/clients', clientsRouter);

export default routes;
