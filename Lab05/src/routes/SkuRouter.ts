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
  let query =req.params.id;
  let sku = skus.find(sku => sku.sku === query);
  if (sku) {
    res.statusCode =200;
    res.status(200)
      .send({
        message: 'Success',
        status: res.status,
        sku
      });

  }
  else {
    res.status(404)
      .send({
        message: 'No sku found with the given id.',
        status: res.status
      });
  }
}

/**
 * Take each handler, and attach to one of the Express.Router's
 * endpoints.
 */
init() {
  this.router.get('/', this.getAll);
  this.router.get('/:id', this.getOne);
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
