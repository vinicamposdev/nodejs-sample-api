import Client from '../infra/sequelize/models/client';
import ICreateClientDTO from '../dtos/ICreateClientDTO';

export default interface IClientsRepository {
  findAll(): Promise<Client[] | undefined>;
  findByEmail(email: string): Promise<Client | undefined>;
  findById(id: string): Promise<Client | undefined>;
  create(data: ICreateClientDTO): Promise<Client>;
  save(client: Client): Promise<Client>;
}
