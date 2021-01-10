import { Sequelize } from 'sequelize-typescript';

import Client from '../../../modules/users/infra/sequelize/models/client';

const sequelize = new Sequelize(
  'postgres://postgres:docker@localhost:5433/postgres',
);
sequelize.addModels([Client]);

export default sequelize;
