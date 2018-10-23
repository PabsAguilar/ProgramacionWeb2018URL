import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { SkuRouter } from "./routes/SkuRouter";

class App {
  public app: express.Application;
  public routePrv: SkuRouter = new SkuRouter();
  public mongoUrl: string = "mongodb://localhost/store";

  constructor() {
    this.mongoSetup();
    this.app = express();
    this.config();
    this.routes();
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose.connect(this.mongoUrl);
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get("/", (req, res, next) => {
      res.json({
        message: "Hello World!"
      });
    });
    this.app.use("/", router);
    this.app.use("/api/v1/sku", this.routePrv.router);
  }

  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    //support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
