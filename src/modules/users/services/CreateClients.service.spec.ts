import AppError from '@shared/errors/AppErrors';

import FakeClientsRepository from '../repositories/fakes/ClientsRepository.fake';
import FakeAddressProvider from '../providers/AddressProvider/fakes/FakeAddressProvider';
import CreateClientService from './CreateClients.service';

const userDataMock = {
  email: 'test',
  cpf: 'test',
  postal_code: 0,
  street: 'test',
  street_number: 'test',
  neighborhood: 'test',
  city: 'test',
  complement: 'test',
};

let fakeClientsRepository: FakeClientsRepository;
let fakeAddressProvider: FakeAddressProvider;
let createClient: CreateClientService;

describe('CreateClient', () => {
  beforeEach(() => {
    fakeClientsRepository = new FakeClientsRepository();
    fakeAddressProvider = new FakeAddressProvider();
    createClient = new CreateClientService(
      fakeClientsRepository,
      fakeAddressProvider,
    );
  });

  it('should be able to create a new client', async () => {
    const client = await createClient.run(userDataMock);

    expect(client).toHaveProperty('id');
  });

  it('should not be able to create a new client with same email from another', async () => {
    await createClient.run(userDataMock);

    await expect(createClient.run(userDataMock)).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
