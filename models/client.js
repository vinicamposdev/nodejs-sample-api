'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Client.init({
    id: DataTypes.STRING,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    postal_code: DataTypes.INTEGER,
    city: DataTypes.STRING,
    neightborhood: DataTypes.STRING,
    street: DataTypes.STRING,
    street_number: DataTypes.STRING,
    complement: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};