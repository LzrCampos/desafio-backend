import { Customer } from '../../models/customer.model';
import { Request, Response } from 'express';
import * as schema from '../../../services/database/schemas/customer.schema';

class customerController {
    constructor() {}

    async store(req: Request, res: Response) {
        let customer = new Customer(req.body);
        let customerSchema = new schema.Customer(customer);
        try {
            await customerSchema.save();
            res.status(201).json({ success: true });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async update(req: Request, res: Response) {
        let customer = new Customer(req.body);
        try {
            res.status(201).json({ success: true });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async delete(req: Request, res: Response) {
        try {
            res.status(200).json({ success: true });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async findOne(req: Request, res: Response) {
        try {
            let customer = await schema.Customer.findOne(
                {
                    cpf: req.params.cpf,
                },
                {
                    _id: 0,
                    firstName: 1,
                    lastName: 1,
                    cpf: 1,
                    birthday: 1,
                }
            );
            res.status(200).json(customer);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            let customer = await schema.Customer.find(
                {},
                {
                    _id: 0,
                    firstName: 1,
                    lastName: 1,
                    cpf: 1,
                    birthday: 1,
                }
            );
            res.status(200).json(customer);
        } catch (error) {
            res.status(500).json({ error });
        }
    }
}

export default new customerController();
