import {LoginDto, SignUpDto} from "@/domain/auth/auth.dto";
import UserRepo from "@/domain/user/user.repo";
import NotFoundError from "@errors/not-found.error";
import ErrorCode from "@enums/error-code.enum";
import {compareHash, generateHash} from "@utils/bcrypt.util";
import BadRequestError from "@errors/bad-request.error";
import {JwtService} from "@services/jwt.service";
import {IPayload} from "@/domain/auth/auth.interface";
import ConflictError from "@errors/conflict.error";
import {UserRole} from "@/domain/user/user.enum";

export class AuthService {
    private userRepo = new UserRepo()
    private jwtService = new JwtService()

    public login = async (data: LoginDto): Promise<string> => {
        const {phone, password} = data;

        const user = await this.userRepo.getByPhone(phone);
        if(!user) throw new NotFoundError(ErrorCode.UserNotFound)

        const doesPasswordMatch = await compareHash(password, user.password);
        if(!doesPasswordMatch) throw new BadRequestError(ErrorCode.InvalidCredentials)

        const payload: IPayload = {
            id: user._id,
            phone: user.phone,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
        }

        const token: string = this.jwtService.generateToken(payload)

        return token
    }

    public signUp = async (data: SignUpDto): Promise<string> => {
        const { phone, firstName, lastName, password } = data;

        const user = await this.userRepo.getByPhone(phone);
        if(user) throw new ConflictError(ErrorCode.UserAlreadyExits);

        const hash: string = await generateHash(password);

        data.password = hash

        const newUser = await this.userRepo.create(data);

        const payload: IPayload = {
            id: newUser._id,
            firstName,
            lastName,
            phone,
            role: UserRole.User
        }

        const token: string = this.jwtService.generateToken(payload)

        return token
    }
}