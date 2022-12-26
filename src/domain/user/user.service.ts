import UserRepo from "@/domain/user/user.repo";
import { CreateUserDto, UserDto } from "@/domain/user/dto/user.dto";
import ErrorCode from "@enums/error-code.enum";
import BadRequestError from "@errors/bad-request.error";
import {generateHash} from "@utils/bcrypt.util";
import {IUser} from "@/domain/user/user.interface";

class UserService {
  public userRepo = new UserRepo();
}

export default UserService;
