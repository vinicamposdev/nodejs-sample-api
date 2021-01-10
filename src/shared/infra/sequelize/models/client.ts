import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize(
  'postgres://postgres:docker@localhost:5433/postgres',
);

class User extends Model {
  public id!: string; // Note that the `null assertion` `!` is required in strict mode.

  public cpf!: string;

  public address!: string;

  public email!: string;
}

User.init(
  {
    id: {
      type: DataTypes.STRING(128),
      primaryKey: true,
    },
    cpf: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    address: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: 'Clients',
    sequelize,
  },
);

export default User;
