export interface Address {
  city: string;
  geo: {
    lat: string;
    log: string;
  };
  street: string;
  suite: string;
  zipcode: string;
}

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}

export interface User {
  email: string;
  name: string;
  id: number;
  phone: string;
  username: string;
  website: string;
  company: Company;
  address: Address;
}
