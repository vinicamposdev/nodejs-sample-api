import AppError from '@shared/errors/AppErrors';

import FakeClientsRepository from '../repositories/fakes/ClientsRepository.fake';
import FakeAddressProvider from '../providers/AddressProvider/fakes/FakeAddressProvider';
import CreateClientService from './CreateClients.service';
import ReadClientService from './ReadClients.service';

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
let readClient: ReadClientService;

describe('CreateClient', () => {
  beforeEach(() => {
    fakeClientsRepository = new FakeClientsRepository();
    fakeAddressProvider = new FakeAddressProvider();
    createClient = new CreateClientService(
      fakeClientsRepository,
      fakeAddressProvider,
    );
    readClient = new ReadClientService(fakeClientsRepository);
  });

  it('should be able to read a new client', async () => {
    const { email } = await createClient.run(userDataMock);

    const client = await readClient.run({ email });

    expect(client.email).toBe(email);
  });

  it('should not be able to read an client without an email', async () => {
    await expect(readClient.run({ email: '' })).rejects.toBeInstanceOf(
      AppError,
    );
  });
});
