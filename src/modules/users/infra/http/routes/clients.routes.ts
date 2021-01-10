import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ClientsController from '../controllers/ClientsController';

const clientController = new ClientsController();
const clientsRouter = Router();

clientsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      cpf: Joi.string().required(),
      address: Joi.object({
        postal_code: Joi.number().required(),
        uf: Joi.string(),
        city: Joi.string(),
        neighborhood: Joi.string(),
        street: Joi.string().required(),
        street_number: Joi.string(),
        complement: Joi.string(),
      }),
    },
  }),
  clientController.create,
);

clientsRouter.get(
  '/',
  celebrate({
    [Segments.QUERY]: {
      email: Joi.string().email().required(),
    },
  }),
  clientController.read,
);

export default clientsRouter;
