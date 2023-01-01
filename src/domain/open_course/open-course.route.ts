import { Router } from "express";
import OpenCourseController from "./open-course.controller";

class OpenCourseRoute {
  public path = `/open-courses`;
  public openCourseController = new OpenCourseController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.openCourseController.create);
    this.router.get(`${this.path}/`, this.openCourseController.getAll);
    this.router.get(`${this.path}/:slug`, this.openCourseController.getBySlug);
    this.router.put(`${this.path}/:id`, this.openCourseController.update);
    this.router.delete(`${this.path}/:id`, this.openCourseController.delete);
  }
}

export default OpenCourseRoute;
