import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppErrors';

import IClientsRepository from '../repositories/IClientsRepository';
import Client from '../infra/sequelize/models/client';
import ICreateClientDTO from '../dtos/ICreateClientDTO';
import IAddressProvider from '../providers/AddressProvider/models/IAddressProvider';

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

    @inject('AddressProvider')
    private addressProvider: IAddressProvider,
  ) {}

  public async run(userData: ICreateClientDTO): Promise<Client> {
    const checkClientExists = await this.clientsRepository.findByEmail(
      userData.email,
    );

    if (checkClientExists?.id) {
      throw new AppError('Email address already used');
    }

    const client = await this.clientsRepository.create(userData);

    return client;
  }
}

export default CreateClientService;
