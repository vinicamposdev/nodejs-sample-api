import { uuid } from 'uuidv4';
import IClientRepository from '../IClientsRepository';
import ICreateClientDTO from '../../dtos/ICreateClientDTO';
import Client from '../../infra/sequelize/models/client';

class ClientsRepository implements IClientRepository {
  clients: Client[] = [];

  public async findAll(): Promise<Client[] | undefined> {
    return this.clients;
  }

  public async findByEmail(email: string): Promise<Client | undefined> {
    return this.clients.find(u => u.email === email);
  }

  public async findById(id: string): Promise<Client | undefined> {
    const clientFinded = this.clients.find(u => u.id === id);

    return clientFinded;
  }

  public async create(clientContent: ICreateClientDTO): Promise<Client> {
    const client = new Client();

    return client;
  }

  public async save(client: Client): Promise<Client> {
    const findIndex = this.clients.findIndex(u => u.id === client.id);

    this.clients[findIndex] = client;

    return client;
  }
}

export default ClientsRepository;
