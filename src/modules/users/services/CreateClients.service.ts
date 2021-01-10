import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppErrors';

import IClientsRepository from '../repositories/IClientsRepository';
import Client from '../infra/sequelize/models/client';
import ICreateClientDTO from '../dtos/ICreateClientDTO';

/**
 * Creating Client Busines Rule
 * @param {string} email
 * @author Vinicius Campos
 */

@injectable()
class CreateClientService {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository,
  ) {}

  public async run({ email }: ICreateClientDTO): Promise<Client> {
    const client = await this.clientsRepository.create({ email });

    if (!client || !client.id) {
      throw new AppError('Client not found');
    }

    return client;
  }
}

export default CreateClientService;
