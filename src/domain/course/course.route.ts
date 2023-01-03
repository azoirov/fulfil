import { checkToken } from "@/middlewares/auth.middleware";
import { checkRole } from "@/middlewares/role.middleware";
import { Router } from "express";
import { UserRole } from "../user/user.enum";
import CourseController from "./course.controller";

class CourseRoute {
  public path = `/courses`;
  public courseController = new CourseController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, checkToken, checkRole(UserRole.Admin), this.courseController.create);
    this.router.get(`${this.path}/`, this.courseController.getAll);
    this.router.get(`${this.path}/:slug`, this.courseController.getBySlug);
    this.router.put(`${this.path}/:id`, checkToken, checkRole(UserRole.Admin), this.courseController.update);
    this.router.delete(`${this.path}/:id`, checkToken, checkRole(UserRole.Admin), this.courseController.delete);
  }
}

export default CourseRoute;
