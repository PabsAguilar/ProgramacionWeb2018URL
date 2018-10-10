import {Router, Request, Response, NextFunction} from 'express';
//const Heroes = require('../data');

export class SkuRouter {
  router: Router

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
   // res.send(Heroes);
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the HeroRouter, and export its configured Express.Router
const skuRoutes = new SkuRouter();
skuRoutes.init();



export default skuRoutes.router;