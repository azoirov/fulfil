import UserService from "@/domain/user/user.service";
import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "@/domain/user/dto/user.dto";
import { validation } from "@/utils/validation";

class UserController {
  public userService = new UserService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: CreateUserDto = req.body;

      await validation(CreateUserDto, req.body);

      const user = await this.userService.create(data);

      res.json(user);
    } catch (error) {
      next(error);
    }
  };
}

export default UserController;
