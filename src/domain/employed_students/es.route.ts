import { checkToken } from "@/middlewares/auth.middleware";
import { checkRole } from "@/middlewares/role.middleware";
import { Router } from "express";
import { UserRole } from "../user/user.enum";
import EmployedStudentsController from "./es.controller";

class EmployedStudentsRoute {
  public path = `/employed-students`;
  public employedStudensController = new EmployedStudentsController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, checkToken, checkRole(UserRole.Admin), this.employedStudensController.create);
    this.router.get(`${this.path}/`, this.employedStudensController.getAll);
    this.router.get(`${this.path}/:id`, this.employedStudensController.getById);
    this.router.delete(`${this.path}/:id`, checkToken, checkRole(UserRole.Admin), this.employedStudensController.delete);
    this.router.put(`${this.path}/:id`, checkToken, checkRole(UserRole.Admin), this.employedStudensController.update);
  }
}

export default EmployedStudentsRoute;
