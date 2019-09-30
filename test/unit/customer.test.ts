import { Customer } from "../../src/app/models/customer.model";
import { ICustomer } from "../../src/app/models/interfaces/customer.interface";

let validInput: ICustomer;

describe("User model", function() {
  beforeAll(function() {
    validInput = {
      firstName: "Lazaro",
      lastName: "Campos",
      cpf: "1234567890",
      birthday: new Date("2000-09-11")
    };
  });
  it("Property validate", () => {
    // Setup
    const customer = new Customer(validInput);

    // Execution
    const customerFullName = customer.getName();

    // Assertion
    expect(customerFullName).toBe("Lazaro Campos");
  });
});
