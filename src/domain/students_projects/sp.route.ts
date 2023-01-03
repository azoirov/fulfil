import { checkToken } from "@/middlewares/auth.middleware";
import { checkRole } from "@/middlewares/role.middleware";
import { Router } from "express";
import { UserRole } from "../user/user.enum";
import SpController from "./sp.controller";

class SpRoute {
  public path = `/students-projects`;
  public spController = new SpController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`,  checkToken, checkRole(UserRole.Admin),this.spController.create);
    this.router.get(`${this.path}/`, this.spController.getAll);
    this.router.get(`${this.path}/:id`, this.spController.getById);
    this.router.delete(`${this.path}/:id`, checkToken, checkRole(UserRole.Admin), this.spController.delete);
    this.router.put(`${this.path}/:id`, checkToken, checkRole(UserRole.Admin), this.spController.update);
  }
}

export default SpRoute;
