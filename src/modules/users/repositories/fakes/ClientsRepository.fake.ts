import { uuid } from 'uuidv4';
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

  public async create(clientContent: ICreateClientDTO): Promise<Client> {
    const client = new Client();

    Object.assign(client, { id: uuid() }, clientContent);

    this.clients.push(client);

    return client;
  }
}

export default ClientsRepository;
