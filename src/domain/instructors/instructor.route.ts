import { Router } from "express";
import InstructorController from "./instructor.controller";

class InstructorRoute {
  public path = `/instructors`;
  public InstructorController = new InstructorController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.InstructorController.create);
    this.router.get(`${this.path}/`, this.InstructorController.getAll);
    this.router.get(`${this.path}/:id`, this.InstructorController.getById);
    this.router.delete(`${this.path}/:id`, this.InstructorController.delete);
    this.router.put(`${this.path}/:id`, this.InstructorController.update);
  }
}

export default InstructorRoute;
