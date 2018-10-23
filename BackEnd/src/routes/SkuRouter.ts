import { Router, Request, Response, NextFunction } from "express";
import { SkuSchema } from "../models/sku";
import * as mongoose from "mongoose";

const SkuM = mongoose.model("Sku", SkuSchema);

export class SkuRouter {
  public router: Router;

  /**
   * Initialize the skuRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all skus.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    try {
      SkuM.find({}, (err, contact) => {
        if (err) {
          res.statusCode = 500;
          res.send(err);
        }
        res.statusCode = 201;
        res.json(contact);
      });
    } catch (error) {
      res.statusCode = 500;
      res.send({
        message: error,
        status: res.status
      });
    }
  }

  /**
   * GET one sku by id
   */
  public getOne(req: Request, res: Response, next: NextFunction) {
    try {
      SkuM.find({ sku: req.params.id }, (err, sku) => {
        if (err) {
          res.statusCode = 404;
          return res.send({
            message: err,
            status: res.status
          });
        }
        if (sku.length === 0) {
          res.statusCode = 404;
          return res.send({
            message: "Not Found",
            status: res.status
          });
        }
        res.statusCode = 200;
        res.send({
          message: "Success",
          status: res.status,
          sku
        });
      });
    } catch (error) {
      res.statusCode = 500;
      res.send({
        message: error,
        status: res.status
      });
    }
  }

  /**
   * POST sku
   */
  public postSku(req: Request, res: Response) {
    try {
      // let sku1 = <Sku>req.body;
      let newSku = new SkuM(req.body);

      newSku.save((err, sku) => {
        if (err) {
          res.statusCode = 400;
          return res.send({
            message: err,
            status: res.status
          });
        }
        res.statusCode = 201;
        res.send({
          message: "Success",
          status: res.status
        });
        res.json(sku);
      });
    } catch (error) {
      res.statusCode = 500;
      res.send({
        message: error,
        status: res.status
      });
    }
  }

  /**
   * PUT one sku
   */
  public putSku(req: Request, res: Response) {
    try {
      SkuM.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true },
        (err, sku) => {
          if (err) {
            res.statusCode = 404;
            return res.send({
              message: err,
              status: res.status
            });
          }
          res.statusCode = 204;
          res.send({
            message: "Success",
            status: res.status
          });
        }
      );
    } catch (error) {
      res.statusCode = 500;
      res.send({
        message: error,
        status: res.status
      });
    }
  }

  /**
   * DELETE one sku
   */
  public deleteSku(req: Request, res: Response) {
    try {
      SkuM.remove({ _id: req.params.id }, err => {
        if (err) {
          res.statusCode = 404;
          return res.send({
            message: err,
            status: res.status
          });
        }
        res.statusCode = 204;
        res.send({
          message: "Success",
          status: res.status
        });
      });
    } catch (error) {
      res.statusCode = 500;
      res.send({
        message: error,
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
    this.router.put("/:id", this.putSku);
    this.router.delete("/:id", this.deleteSku);
    this.router.post("/", this.postSku);
  }
}

// Create the skuRouter, and export its configured Express.Router
const skuRoutes = new SkuRouter();
skuRoutes.init();
export default skuRoutes.router;
