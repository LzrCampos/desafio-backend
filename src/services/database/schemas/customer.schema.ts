import { Schema, Document } from "mongoose";
import * as mongoose from "mongoose";
import { ICustomer } from "../../../app/models/interfaces/customer.interface";

export interface ICustomerModel extends ICustomer, Document {}

const customerSchema: Schema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    cpf: { type: String, unique: true },
    birthday: { type: Date }
  },
  { timestamps: true }
);

export const Customer = mongoose.model<ICustomerModel>("Customer", customerSchema);
