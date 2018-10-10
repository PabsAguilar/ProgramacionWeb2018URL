"use strict";
const express_1 = require("express");
const sku_1 = require("../models/sku");
const skus = [];
class SkuRouter {
    /**
     * Initialize the HeroRouter
     */
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all Heroes.
     */
    getAll(req, res, next) {
        res.send(skus);
        res.statusCode = 200;
    }
    /**
     * GET one hero by id
     */
    getOne(req, res, next) {
        let query = req.params.id;
        let sku = skus.find(sku => sku.sku === query);
        if (sku) {
            res.statusCode = 200;
            res.status(200).send({
                message: "Success",
                status: res.status,
                sku
            });
        }
        else {
            res.status(404).send({
                message: "No sku found with the given id.",
                status: res.status
            });
        }
    }
    /**
     * POST one hero
     */
    postSku(req, res) {
        let sku1 = req.body;
        console.log("sku1");
        console.log(sku1);
        console.log("body");
        console.log(req.body);
        if (sku1) {
            skus.push(sku1);
            res.statusCode = 201;
            res.status(200).send({
                message: "Success",
                status: res.status
            });
        }
        else {
            res.statusCode = 400;
            res.status(400).send({
                message: "Bad request could cast to sku.",
                status: res.status
            });
        }
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get("/", this.getAll);
        this.router.get("/:id", this.getOne);
        this.router.post("/", this.postSku);
    }
}
exports.SkuRouter = SkuRouter;
// Create the HeroRouter, and export its configured Express.Router
const skuRoutes = new SkuRouter();
skuRoutes.init();
skus.push(new sku_1.Sku("sku0001", "box of chocolates", new Date(), "http://hola.jpg", "Dairy"));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = skuRoutes.router;
