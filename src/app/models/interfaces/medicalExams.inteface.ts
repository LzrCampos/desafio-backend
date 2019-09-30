import { Double } from "bson";

export interface IMedicalExams {
    id: number,
    name: string,
    value: Double
}

export interface IExamsList {
    exams: Array<IMedicalExams>
}

export interface IExamsResult {
    id: number,
    name: string
}