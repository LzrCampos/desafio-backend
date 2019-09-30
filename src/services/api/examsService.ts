import axios from "axios";
import { IExamsList } from "../../app/models/interfaces/medicalExams.inteface";

class ExamsService {
  constructor() {}
  public async listExams(): Promise<IExamsList> {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.request({
          url: "http://www.mocky.io/v2/5d681ede33000054e7e65c3f",
          method: "get",
          headers: {
            "Content-Type": "application/json;charset=UTF-8"
          }
        });
        resolve(result.data);
      } catch (error) {
        reject(error);
      }
    });
  }
}

export default new ExamsService();
