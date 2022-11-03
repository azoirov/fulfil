import { userModel } from "@/domain/user/user.model";
import { CreateUserDto, UserDto } from "@/domain/user/dto/user.dto";

class UserRepo {
  private userModel: typeof userModel;

  constructor() {
    this.userModel = userModel;
  }

  public getById = async (id: string): Promise<UserDto> => {
    return this.userModel.findById(id);
  };

  public getByPhone = async (phone: string): Promise<UserDto> => {
    return this.userModel.findOne({ phone });
  };

  public create = async (data: CreateUserDto): Promise<UserDto> => {
    return this.userModel.create(data);
  };
}

export default UserRepo;
