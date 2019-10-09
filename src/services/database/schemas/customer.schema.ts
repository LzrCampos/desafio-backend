import { Schema, Document } from "mongoose";
import * as mongoose from "mongoose";
import { ICustomer } from "../../../app/models/interfaces/customer.interface";

export interface ICustomerModel extends ICustomer, Document {}

const customerSchema: Schema = new Schema(
  {
    firstName: { type: String, required:true },
    lastName: { type: String, required:true },
    cpf: { type: String, required:true, unique: true },
    birthday: { type: Date, required:true }
  },
  { timestamps: true }
);

export const Customer = mongoose.model<ICustomerModel>("Customer", customerSchema);
