import examsService from "../../../services/api/examsService";
import { IExamsResult } from "../../models/interfaces/medicalExams.inteface";

class ConsultationController {
  constructor() {}
  async getExams(req, res) {
    let examsList = await examsService.listExams();
    let exams = examsList.exams.map(function(value) {
      let { id, name } = value;
      return { id, name };
    });
    res.status(200).json(exams);
  }
}

export default new ConsultationController();
