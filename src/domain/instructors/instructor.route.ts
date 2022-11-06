import { Router } from "express";
import InstructorController from "./instructor.controller";

class InstructorRoute {
  public path = `/instructors`;
  public instructorController = new InstructorController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.instructorController.create);
    this.router.get(`${this.path}/`, this.instructorController.getAll);
    this.router.get(`${this.path}/:id`, this.instructorController.getById);
    this.router.delete(`${this.path}/:id`, this.instructorController.delete);
    this.router.put(`${this.path}/:id`, this.instructorController.update);
  }
}

export default InstructorRoute;
