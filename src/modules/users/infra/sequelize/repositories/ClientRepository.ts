/* eslint-disable @typescript-eslint/no-explicit-any */
import { Repository } from 'sequelize-typescript';
import sequelize from '@shared/infra/sequelize';
import Client from '../models/client';
import IClientRepository from '../../../repositories/IClientsRepository';
import ICreateClientDTO from '../../../dtos/ICreateClientDTO';

class ClientsRepository implements IClientRepository {
  private sequelizeRepository: Repository<Client>;

  constructor() {
    this.sequelizeRepository = sequelize.getRepository(Client);
  }

  public async findByEmail(email: string): Promise<Client | null> {
    const user = await this.sequelizeRepository.findOne({ where: { email } });

    return user;
  }

  public async create(data: ICreateClientDTO): Promise<Client> {
    const user = await this.sequelizeRepository.create(data);
    return user;
  }
}

export default ClientsRepository;
