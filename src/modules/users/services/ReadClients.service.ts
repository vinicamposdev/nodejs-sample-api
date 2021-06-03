import 'reflect-metadata';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppErrors';

import IClientsRepository from '../repositories/IClientsRepository';
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

  public async run(userData: { email: string }): Promise<ICreateClientDTO> {
    const checkClientExists = await this.clientsRepository.findByEmail(
      userData.email,
    );

    if (!checkClientExists) {
      throw new AppError('Email not found', 404);
    }

    const {
      cpf,
      id,
      city,
      complement,
      email,
      neighborhood,
      postal_code,
      street,
      street_number,
    } = checkClientExists;

    const clientFound: ICreateClientDTO & { id: string } = {
      id,
      cpf,
      email,
      address: {
        city,
        complement,
        neighborhood,
        postal_code: parseInt(postal_code, 10),
        street,
        street_number,
      },
    };

    return clientFound;
  }
}

export default CreateClientService;
