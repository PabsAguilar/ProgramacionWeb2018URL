import * as express from "express";
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import { SkuRouter } from "./routes/SkuRouter";
import { redisExpressCache } from "redis/redis";

class App {
  public app: express.Application;
  public routePrv: SkuRouter = new SkuRouter();
  public mongoUrl: string = "mongodb://localhost/store";
  public redis;
  constructor(redis) {
    //this.redis = redis;
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

    // router.get(
    //   "/hola",
    //   this.redis.route({
    //     name: "home",
    //     expire: {
    //       "2xx": 60,
    //       "4xx": 5,
    //       "5xx": 5,
    //       xxx: 1
    //     }
    //   }),
    //   (req, res, next) => {
    //     res.json({
    //       message: "Hello World!"
    //     });
    //   }
    // );

    router.get("/", (req, res, next) => {
      res.json({
        message: "Hello World!"
      });
    });

    this.app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.header(
        "Access-Control-Allow-Methods",
        "PUT, POST, GET, DELETE, OPTIONS"
      );
      next();
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
