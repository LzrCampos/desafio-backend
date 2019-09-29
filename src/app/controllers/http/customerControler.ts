import { ICustomer } from "../../models/interfaces/customer.interface";
import { Customer } from "../../models/customer.model";

class customerController {
  constructor() {}

  createUser(req, res): void {
    const customer = new Customer(req.body);
    res.status(201).json(customer.getName());
  }
}

export default new customerController();
