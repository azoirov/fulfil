import { Router } from "express";
import leadController from "./leads.controller";
import {checkToken} from "@middlewares/auth.middleware";
import {checkRole} from "@middlewares/role.middleware";
import {UserRole} from "@/domain/user/user.enum";


class LeadRoute {
  public path = `/leads`;
  public leadController = new leadController();
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/`, this.leadController.create);
    this.router.get(`${this.path}/`, checkToken, checkRole(UserRole.Admin), this.leadController.getAll);
    this.router.delete(`${this.path}/:id`, this.leadController.delete);
  }
}

export default LeadRoute;
