import * as request from "supertest";
import { Customer } from "../../src/app/models/customer.model";
import app from "../../src/app/app";
import { ICustomer } from "../../src/app/models/interfaces/customer.interface";

let validCustomer: ICustomer;

describe("Post /customer", function() {
  beforeAll(function() {
    validCustomer = {
      firstName: "Lazaro",
      lastName: "Campos",
      cpf: "1234567890",
      birthday: new Date("2000-09-11")
    };
  });
  it("shold return 201 ok", async () => {
    //setup
    let customer = new Customer(validCustomer);

    // Execution
    const { status } = await request(app)
      .post("/api/customer")
      .send(customer);

    // Assertion
    expect(status).toBe(201);
  });
});
