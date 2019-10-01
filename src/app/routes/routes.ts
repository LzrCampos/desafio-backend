import { Application, Request, Response } from "express";

import customerControler from "../controllers/http/customer.controler";
import consultationController from "../controllers/http/consultation.controller";

class Routes {
  constructor() {}

  initRoutes(app: Application): void {
    app.route("/api/customer").post(customerControler.store);
    app.route("/api/customer/:cpf").get(customerControler.findOne);
    app.route("/api/exams").get(consultationController.getExams);
  }
}

export default new Routes();
