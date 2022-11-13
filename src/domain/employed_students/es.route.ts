import { Router } from "express";
import EmployedStudentsController from "./es.controller";

class EmployedStudentsRoute {
  public path = `/employed-students`;
  public employedStudensController = new EmployedStudentsController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.employedStudensController.create);
    this.router.get(`${this.path}/`, this.employedStudensController.getAll);
    this.router.get(`${this.path}/:id`, this.employedStudensController.getById);
    this.router.delete(`${this.path}/:id`, this.employedStudensController.delete);
    this.router.put(`${this.path}/:id`, this.employedStudensController.update);
  }
}

export default EmployedStudentsRoute;
