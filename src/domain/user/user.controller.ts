import UserService from "@/domain/user/user.service";
import { NextFunction, Request, Response } from "express";
import { CreateUserDto } from "@/domain/user/dto/user.dto";
import { validationUtil } from "@utils/validation.util";

class UserController {
  public userService = new UserService();
}

export default UserController;
