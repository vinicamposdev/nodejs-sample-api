import AppError from '@shared/errors/AppErrors';

import FakeClientsRepository from '../repositories/fakes/ClientsRepository.fake';
import CreateClientService from './CreateClients.service';

let fakeClientsRepository: FakeClientsRepository;
let createClient: CreateClientService;

describe('CreateClient', () => {
  beforeEach(() => {
    fakeClientsRepository = new FakeClientsRepository();
    createClient = new CreateClientService(fakeClientsRepository);
  });

  it('should be able to create a new client', async () => {
    const client = await createClient.run({
      email: 'johndoe@example.com',
    });

    expect(client).toHaveProperty('id');
  });

  it('should not be able to create a new client with same email from another', async () => {
    await createClient.run({
      email: 'johndoe@example.com',
    });

    await expect(
      createClient.run({
        email: 'johndoe@example.com',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
