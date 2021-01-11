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
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    postal_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    street: {
      type: DataTypes.STRING,
      allowNull: false
    },
    street_number: DataTypes.STRING,
    complement: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};
