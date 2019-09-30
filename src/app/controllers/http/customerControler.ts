import { ICustomer } from "../../models/interfaces/customer.interface";
import { Customer } from "../../models/customer.model";

class customerController {
  constructor() {}

  async store(req, res): Promise<void> {
    const customer = new Customer(req.body);
    res.status(201).json(customer.getName());
  }

  async update(req, res): Promise<void> {

  }

  async delete(req, res): Promise<void> {

  }

  async findOne(req, res): Promise<void> {

  }

  async findAll(req, res): Promise<void>{

  }
}

export default new customerController();
