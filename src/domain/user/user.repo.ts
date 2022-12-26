import { userModel } from "@/domain/user/user.model";
import { CreateUserDto, UserDto } from "@/domain/user/dto/user.dto";
import {IUser} from "@/domain/user/user.interface";

class UserRepo {
  private userModel: typeof userModel;

  constructor() {
    this.userModel = userModel;
  }

  public getById = async (id: string): Promise<IUser> => {
    return this.userModel.findById(id);
  };

  public getByPhone = async (phone: string): Promise<IUser> => {
    return this.userModel.findOne({ phone });
  };

  public create = async (data: CreateUserDto): Promise<IUser> => {
    return this.userModel.create(data);
  };
}

export default UserRepo;
