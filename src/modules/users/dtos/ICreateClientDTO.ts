interface AddressDTO {
  postal_code: number;
  city: string;
  neighborhood?: string | null;
  street: string;
  street_number?: string | null;
  complement?: string | null;
}

export default interface ICreateClientDTO {
  email: string;
  cpf: string;
  address: AddressDTO;
}
