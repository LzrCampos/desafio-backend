import * as express from "express";
import { Application } from "express";
import * as morgan from "morgan";
import Routes from "./routes/routes";
import * as bodyParser from "body-parser";
import Handler from "./responses/handlers";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();
    this.middleware();
  }

  private middleware(): void {
    this.express.use(morgan("dev"));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(Handler.errorHandlerApi)
    this.router(this.express);
  }

  private router(app: express.Application): void {
    Routes.initRoutes(app);
  }
}

export default new App().express;
