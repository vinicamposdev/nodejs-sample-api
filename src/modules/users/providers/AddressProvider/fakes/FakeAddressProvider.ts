import IAddressProvider from '../models/IAddressProvider';
import { Address } from '../dtos/AddressDTO';

const mockAddress: Address = {
  cep: '01001-000',
  logradouro: 'Praça da Sé',
  complemento: 'lado ímpar',
  bairro: 'Sé',
  localidade: 'São Paulo',
  uf: 'SP',
  ibge: 3550308,
  gia: 1004,
  ddd: 11,
  siafi: 7107,
};

class FakeAddressProvider implements IAddressProvider {
  public async findAddress(postal_code: string): Promise<Address> {
    return { ...mockAddress, cep: postal_code };
  }
}

export default FakeAddressProvider;
