import { Router } from "express";
import CourseController from "./course.controller";

class CourseRoute {
  public path = `/courses`;
  public courseController = new CourseController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.courseController.create);
    this.router.get(`${this.path}/`, this.courseController.getAll);
    this.router.get(`${this.path}/:slug`, this.courseController.getBySlug);
    this.router.put(`${this.path}/:id`, this.courseController.update);
    this.router.delete(`${this.path}/:id`, this.courseController.delete);
  }
}

export default CourseRoute;
