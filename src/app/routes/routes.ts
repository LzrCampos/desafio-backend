import { Application, Request, Response } from "express";

import customerControler from "../controllers/http/customerControler";
import consultationController from "../controllers/http/consultationController";

class Routes {
  constructor() {}

  initRoutes(app: Application): void {
    app.route("/api/customer").post(customerControler.createUser);
    app.route("/api/exams").get(consultationController.getExams);
  }
}

export default new Routes();
