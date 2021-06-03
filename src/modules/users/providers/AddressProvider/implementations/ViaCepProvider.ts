import axios from 'axios';

import IAddressProvider from '../models/IAddressProvider';
// import { Address } from '../dtos/AddressDTO';

class AddressProvider implements IAddressProvider {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public async findAddress(postal_code: string): Promise<any> {
    const address = await axios({
      url: `https://viacep.com.br/ws/${postal_code}/json/`,
    });

    return address.data;
  }
}

export default AddressProvider;
