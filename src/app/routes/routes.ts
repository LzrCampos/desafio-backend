import { Application, Request, Response } from "express";

import customerControler from "../controllers/http/customerControler";

class Routes {
  constructor() {}

  initRoutes(app: Application): void {
    app.route("/api/customer").post(customerControler.createUser);
  }
}

export default new Routes();
