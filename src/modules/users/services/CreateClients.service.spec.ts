import AppError from '@shared/errors/AppErrors';

import FakeClientsRepository from '../repositories/fakes/ClientsRepository.fake';
import FakeAddressProvider from '../providers/AddressProvider/fakes/FakeAddressProvider';
import CreateClientService from './CreateClients.service';

jest.mock('../infra/sequelize/models/client.ts');

const userDataMock = {
  email: 'emasisdls@email.com',
  cpf: '1234234',
  address: {
    street_number: 'eiusmod magna aliquip do',
    street: 'eiusmod magna aliquip do',
    complement: 'dolor',
    neighborhood: 'est',
    city: 'nostrud amet culpa elit',
    postal_code: 1111,
  },
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
