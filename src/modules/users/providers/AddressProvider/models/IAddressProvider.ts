import { Address } from '../dtos/AddressDTO';

export default interface IHashProvider {
  findAddress(postal_code: string): Promise<Address>;
}
