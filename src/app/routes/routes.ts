import { Application, Request, Response } from "express";

import customerControler from "../controllers/http/customer.controler";
import consultationController from "../controllers/http/consultation.controller";

class Routes {
  constructor() {}

  initRoutes(app: Application): void {
    app.route("/api/customer").post(customerControler.store);
    app.route("/api/customer").put(customerControler.update);
    app.route("/api/customer/:cpf").delete(customerControler.delete);
    app.route("/api/customer").get(customerControler.findAll);
    app.route("/api/customer/:cpf").get(customerControler.findOne);
    app.route("/api/exams").get(consultationController.findExams);
    app.route("/api/consultation").post(consultationController.store);
    app.route("/api/consultation").get(consultationController.findAll);
    
  }
}

export default new Routes();
