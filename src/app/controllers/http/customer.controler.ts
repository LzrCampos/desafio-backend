import { ICustomer } from "../../models/interfaces/customer.interface";
import { Customer } from "../../models/customer.model";
import { Request, Response } from "express";
import * as schema from "../../../services/database/schemas/customer.schema";

class customerController {
  constructor() {}

  async store(req: Request, res: Response) {
    let customer: ICustomer;
    customer = new Customer(req.body);

    let customerSchema = new schema.Customer(customer);
    try {
      await customerSchema.save();
      res.status(201).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  async update(req: Request, res: Response) {}

  async delete(req: Request, res: Response) {}

  async findOne(req: Request, res: Response) {
    try {
      let customer = await schema.Customer.findOne({ cpf: req.params.cpf });
      res.status(200).json({ customer: customer });
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  async findAll(req: Request, res: Response) {}
}

export default new customerController();
