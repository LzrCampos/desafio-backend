import { Request, Response } from 'express';
import examsService from '../../../services/api/examsService';
import * as consultationSchema from '../../../services/database/schemas/consultation.schema';
import * as customerSchema from '../../../services/database/schemas/customer.schema';
import { Customer } from '../../models/customer.model';

class ConsultationController {
    constructor() {}

    async store(req: Request, res: Response) {
        let { consultationId, date, hour, cpf } = req.body;

        let examsList = await examsService.listExams();
        let examFilter = examsList.exams.filter(function(value) {
            return value.id == consultationId;
        });
        try {
            let customer = await customerSchema.Customer.findOne({
                cpf: cpf,
            });

            let consultation = new consultationSchema.Consultation({
                consultationId: examFilter[0].id,
                name: examFilter[0].name,
                price: examFilter[0].value,
                date: date,
                hour: hour,
                customer: customer.id,
            });

            consultation.save();
            res.status(200).json({ status: true });
        } catch (error) {
            res.status(500).json({ error: error });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            let consultation = await consultationSchema.Consultation.find({});
            res.status(200).json(consultation);
        } catch (error) {
            res.status(500).json({ error });
        }
    }

    async findExams(req: Request, res: Response) {
        let examsList = await examsService.listExams();
        let exams = examsList.exams.map(function(value) {
            let { id, name } = value;
            return { id, name };
        });
        res.status(200).json(exams);
    }
}

export default new ConsultationController();
