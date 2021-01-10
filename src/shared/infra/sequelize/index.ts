import { Sequelize } from 'sequelize-typescript';

import Client from '../../../modules/users/infra/sequelize/models/client';

const sequelize = new Sequelize(
  process.env.DATABASE_URI ||
    'postgres://postgres:postgres@localhost:5432/postgres',
);
sequelize.addModels([Client]);

export default sequelize;
