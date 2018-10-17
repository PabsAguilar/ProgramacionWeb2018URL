"use strict";
const express_1 = require("express");
const sku_1 = require("../models/sku");
const mongoose = require("mongoose");
const SkuM = mongoose.model("Contact", sku_1.SkuSchema);
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
        SkuM.find({}, (err, sku) => {
            if (err) {
                res.status(500).send({
                    message: err,
                    status: res.status
                });
            }
            res.statusCode = 200;
            res.json(sku);
        });
    }
    /**
     * GET one hero by id
     */
    getOne(req, res, next) {
        SkuM.findById(req.params.id, (err, sku) => {
            if (err) {
                res.status(404).send({
                    message: err,
                    status: res.status
                });
            }
            res.statusCode = 200;
            res.status(200).send({
                message: "Success",
                status: res.status,
                sku
            });
        });
    }
    /**
     * POST sku
     */
    postSku(req, res) {
        // let sku1 = <Sku>req.body;
        let newSku = new SkuM(req.body);
        newSku.save((err, sku) => {
            if (err) {
                res.statusCode = 400;
                res.status(400).send({
                    message: err,
                    status: res.status
                });
            }
            res.statusCode = 201;
            res.status(201).send({
                message: "Success",
                status: res.status
            });
            res.json(sku);
        });
    }
    /**
     * PUT one sku
     */
    putSku(req, res) {
        SkuM.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (err, sku) => {
            if (err) {
                res.status(404).send({
                    message: err,
                    status: res.status
                });
            }
            res.statusCode = 204;
            res.status(204).send({
                message: "Success",
                status: res.status
            });
        });
    }
    /**
     * DELETE one sku
     */
    deleteSku(req, res) {
        SkuM.remove({ _id: req.params.id }, err => {
            if (err) {
                res.statusCode = 404;
                res.status(404).send({
                    message: err,
                    status: res.status
                });
            }
            res.statusCode = 204;
            res.status(204).send({
                message: "Success",
                status: res.status
            });
        });
    }
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    init() {
        this.router.get("/", this.getAll);
        this.router.get("/:id", this.getOne);
        this.router.put("/:id", this.putSku);
        this.router.delete("/:id", this.deleteSku);
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
