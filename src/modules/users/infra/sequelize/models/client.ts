import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize(
  'postgres://postgres:docker@localhost:5433/postgres',
);

class Client extends Model {
  public id!: string; // Note that the `null assertion` `!` is required in strict mode.

  public email!: string;

  public cpf!: string;

  public postal_code!: string;

  public city!: string;

  public neighborhood!: string | null;

  public street!: string;

  public street_number!: string | null;

  public complement!: string | null;
}

Client.init(
  {
    id: {
      type: DataTypes.STRING(128),
      primaryKey: true,
    },
    cpf: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    postal_code: {
      type: new DataTypes.INTEGER(),
      allowNull: true,
    },
    city: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    neighborhood: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    street: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    street_number: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
    complement: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: 'Clients',
    sequelize,
  },
);

export default Client;
