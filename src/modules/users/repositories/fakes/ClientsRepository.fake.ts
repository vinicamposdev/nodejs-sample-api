import { uuid } from 'uuidv4';
// eslint-disable-next-line import/no-extraneous-dependencies
import SequelizeMock from 'sequelize-mock';

import IClientRepository from '../IClientsRepository';
import ICreateClientDTO from '../../dtos/ICreateClientDTO';
import Client from '../../infra/sequelize/models/client';

class ClientsRepository implements IClientRepository {
  clients: Client[] = [];

  public async findByEmail(email: string): Promise<Client | null> {
    const userFinded = this.clients.find(u => u.email === email);
    if (userFinded) return userFinded;
    return null;
  }

  public async findByEmailCpf(
    email: string,
    cpf: string,
  ): Promise<Client | null> {
    const userFinded = this.clients.find(
      u => u.cpf === cpf || u.email === email,
    );
    if (userFinded) return userFinded;
    return null;
  }

  public async create(clientContent: ICreateClientDTO): Promise<Client> {
    const clientData = { ...clientContent, id: uuid() };

    const DBConnectionMock = new SequelizeMock();
    const ClientMock = DBConnectionMock.define('clients', clientData, {
      instanceMethods: {
        toJSON() {
          return clientData;
        },
      },
    });

    this.clients.push(ClientMock);

    return ClientMock;
  }
}

export default ClientsRepository;
