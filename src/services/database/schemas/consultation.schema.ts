import { Schema, Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { ICustomer } from '../../../app/models/interfaces/customer.interface';

export interface IConsultationModel extends Document {}

const consultationSchema: Schema = new Schema(
    {
        consultationId: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        date: { type: Date, required: true },
        hour: { type: Number, required: true },
        customer: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
    },
    { timestamps: true }
);

export const Consultation = mongoose.model<IConsultationModel>(
    'Consultation',
    consultationSchema
);
