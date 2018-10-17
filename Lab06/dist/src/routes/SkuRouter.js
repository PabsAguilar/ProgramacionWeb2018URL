"use strict";
var express_1 = require("express");
var sku_1 = require("../models/sku");
var mongoose = require("mongoose");
var SkuM = mongoose.model("Contact", sku_1.SkuSchema);
var skus = [];
var SkuRouter = (function () {
    /**
     * Initialize the HeroRouter
     */
    function SkuRouter() {
        this.router = express_1.Router();
        this.init();
    }
    /**
     * GET all Heroes.
     */
    SkuRouter.prototype.getAll = function (req, res, next) {
        SkuM.find({}, function (err, sku) {
            if (err) {
                res.status(500).send({
                    message: err,
                    status: res.status
                });
            }
            res.statusCode = 200;
            res.json(sku);
        });
    };
    /**
     * GET one hero by id
     */
    SkuRouter.prototype.getOne = function (req, res, next) {
        SkuM.findById(req.params.id, function (err, sku) {
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
                sku: sku
            });
        });
    };
    /**
     * POST sku
     */
    SkuRouter.prototype.postSku = function (req, res) {
        // let sku1 = <Sku>req.body;
        var newSku = new SkuM(req.body);
        newSku.save(function (err, sku) {
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
    };
    /**
     * PUT one sku
     */
    SkuRouter.prototype.putSku = function (req, res) {
        SkuM.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, sku) {
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
    };
    /**
     * DELETE one sku
     */
    SkuRouter.prototype.deleteSku = function (req, res) {
        SkuM.remove({ _id: req.params.id }, function (err) {
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
    };
    /**
     * Take each handler, and attach to one of the Express.Router's
     * endpoints.
     */
    SkuRouter.prototype.init = function () {
        this.router.get("/", this.getAll);
        this.router.get("/:id", this.getOne);
        this.router.put("/:id", this.putSku);
        this.router.delete("/:id", this.deleteSku);
        this.router.post("/", this.postSku);
    };
    return SkuRouter;
}());
exports.SkuRouter = SkuRouter;
// Create the HeroRouter, and export its configured Express.Router
var skuRoutes = new SkuRouter();
skuRoutes.init();
skus.push(new sku_1.Sku("sku0001", "box of chocolates", new Date(), "http://hola.jpg", "Dairy"));
exports.__esModule = true;
exports["default"] = skuRoutes.router;
