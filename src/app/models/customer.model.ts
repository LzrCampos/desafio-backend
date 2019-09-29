import { ICustomer } from "./interfaces/customer.interface";

export class Customer implements ICustomer {
  firstName: string;
  lastName: string;
  cpf: string;
  birthday: Date;

  constructor(customer: ICustomer) {
    this.firstName = customer.firstName;
    this.lastName = customer.lastName;
    this.cpf = customer.cpf;
    this.birthday = customer.birthday;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
