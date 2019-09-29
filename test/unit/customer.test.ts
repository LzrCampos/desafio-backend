import { Customer } from "../../src/app/models/customer.model";

let validInput;

describe("User model", function() {
  beforeAll(function() {
    validInput = {
      firstName: "Lazaro",
      lastName: "Campos",
      cpf: "1234567890",
      birthday: "5567890"
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
