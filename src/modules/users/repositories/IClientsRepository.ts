import Client from '../infra/sequelize/models/client';
import ICreateClientDTO from '../dtos/ICreateClientDTO';

export default interface IClientsRepository {
  findByEmail(email: string): Promise<Client | null>;
  findByEmailCpf(email: string, cpf: string): Promise<Client | null>;
  create(data: ICreateClientDTO): Promise<Client>;
}
