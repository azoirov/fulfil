import UserRepo from "@/domain/user/user.repo";
import {CreateUserDto, UserDto} from "@/domain/user/dto/user.dto";
import ErrorCode from "@enums/error-code.enum";
import BadRequestError from "@errors/bad-request.error";

class UserService {
    public userRepo = new UserRepo();

    public create = async (data: CreateUserDto): Promise<UserDto> => {
        const user = await this.userRepo.getByPhone(data.phone);
        if(!user) throw new BadRequestError(ErrorCode.UserAlreadyExits);

        return this.userRepo.create(data);
    }
}

export default UserService