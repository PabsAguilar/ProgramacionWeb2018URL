import { Router, Request, Response, NextFunction } from "express";
import { Sku } from "../models/sku";
const skus: Sku[] = [];
export class SkuRouter {
  router: Router;

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Heroes.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(skus);
    res.statusCode = 200;
  }

  /**
   * GET one hero by id
   */
  public getOne(req: Request, res: Response, next: NextFunction) {
    let query = req.params.id;
    let sku = skus.find(sku => sku.sku === query);
    if (sku) {
      res.statusCode = 200;
      res.status(200).send({
        message: "Success",
        status: res.status,
        sku
      });
    } else {
      res.status(404).send({
        message: "No sku found with the given id.",
        status: res.status
      });
    }
  }

  /**
   * POST sku
   */
  public postSku(req: Request, res: Response) {
    let sku1 = <Sku>req.body;

    if (sku1) {
      skus.push(sku1);
      res.statusCode = 201;
      res.status(201).send({
        message: "Success",
        status: res.status
      });
    } else {
      res.statusCode = 400;
      res.status(400).send({
        message: "Bad request could cast to sku.",
        status: res.status
      });
    }
  }

  /**
   * PUT one sku
   */
  public putSku(req: Request, res: Response) {
    let sku1 = <Sku>req.body;
    let index = skus.findIndex(sku => sku.sku === req.params.id);
    if (index < 0) {
      res.status(404).send({
        message: "No sku found with the given id.",
        status: res.status
      });
    } else if (sku1) {
      skus[index] = sku1;
      res.statusCode = 204;
      res.status(204).send({
        message: "Success",
        status: res.status
      });
    } else {
      res.statusCode = 400;
      res.status(400).send({
        message: "Bad request could cast to sku.",
        status: res.status
      });
    }
  }

  /**
   * DELETE one sku
   */
  public deleteSku(req: Request, res: Response) {
    let index = skus.findIndex(sku => sku.sku === req.params.id);

    if (index>0) {
      delete skus[index]
      res.statusCode = 204;
      res.status(204).send({
        message: "Success",
        status: res.status
      });
    } else {
      res.statusCode = 404;
      res.status(404).send({
        message: "No sku found with the given id.",
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

// Create the HeroRouter, and export its configured Express.Router
const skuRoutes = new SkuRouter();
skuRoutes.init();
skus.push(
  new Sku(
    "sku0001",
    "box of chocolates",
    new Date(),
    "http://hola.jpg",
    "Dairy"
  )
);
export default skuRoutes.router;
