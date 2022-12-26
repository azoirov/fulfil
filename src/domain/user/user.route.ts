import { Router } from "express";
import UserController from "@/domain/user/user.controller";

class UserRoute {
  public router = Router();
  public userController = new UserController();
  public path = "/users";

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes = () => {
  };
}

export default UserRoute;
