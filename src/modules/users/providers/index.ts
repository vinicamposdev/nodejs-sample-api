import { container } from 'tsyringe';

import IAddressProvider from './AddressProvider/models/IAddressProvider';
import ViaCepProvider from './AddressProvider/fakes/FakeAddressProvider';
// import ViaCepProvider from './AddressProvider/implementations/ViaCepProvider';

container.registerSingleton<IAddressProvider>(
  'AddressProvider',
  ViaCepProvider,
);
