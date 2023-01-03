import { checkToken } from "@/middlewares/auth.middleware";
import { checkRole } from "@/middlewares/role.middleware";
import { Router } from "express";
import { UserRole } from "../user/user.enum";
import OpenCourseController from "./open-course.controller";

class OpenCourseRoute {
  public path = `/open-courses`;
  public openCourseController = new OpenCourseController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, checkToken, checkRole(UserRole.Admin), this.openCourseController.create);
    this.router.get(`${this.path}/`, this.openCourseController.getAllWithPage)
    this.router.get(`${this.path}/`, this.openCourseController.getAll);
    this.router.get(`${this.path}/:slug`, this.openCourseController.getBySlug);
    this.router.put(`${this.path}/:id`, checkToken, checkRole(UserRole.Admin), this.openCourseController.update);
    this.router.delete(`${this.path}/:id`, checkToken, checkRole(UserRole.Admin), this.openCourseController.delete); 
  }
}

export default OpenCourseRoute;
