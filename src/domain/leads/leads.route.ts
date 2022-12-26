import { Router } from "express";
import leadController from "./leads.controller";


class leadRoute {
  public path = `/leads`;
  public leadController = new leadController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.leadController.create);
    this.router.get(`${this.path}/`, this.leadController.getAll);
    this.router.delete(`${this.path}/:id`, this.leadController.delete);
  }
}

export default leadRoute;
