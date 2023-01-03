import { checkToken } from "@/middlewares/auth.middleware";
import { checkRole } from "@/middlewares/role.middleware";
import { Router } from "express";
import { UserRole } from "../user/user.enum";
import InstructorController from "./instructor.controller";

class InstructorRoute {
  public path = `/instructors`;
  public instructorController = new InstructorController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, checkToken, checkRole(UserRole.Admin), this.instructorController.create);
    this.router.get(`${this.path}/`, this.instructorController.getAll);
    this.router.get(`${this.path}/:id`, this.instructorController.getById);
    this.router.delete(`${this.path}/:id`, checkToken, checkRole(UserRole.Admin), this.instructorController.delete);
    this.router.put(`${this.path}/:id`, checkToken, checkRole(UserRole.Admin), this.instructorController.update);
  }
}

export default InstructorRoute;
