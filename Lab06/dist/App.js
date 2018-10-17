"use strict";
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const SkuRouter_1 = require("./routes/SkuRouter");
const mongoose = require("mongoose");
// Creates and configures an ExpressJS web server.
class App {
    //Run configuration methods on the Express instance.
    constructor() {
        this.mongoUrl = "mongodb://localhost:27017/Sku";
        this.express = express();
        this.middleware();
        this.routes();
        this.mongoSetup();
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
    // Configure Express middleware.
    middleware() {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    // Configure API endpoints.
    routes() {
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
        this.express.use("/", router);
        this.express.use("/api/v1/sku", SkuRouter_1.default);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
