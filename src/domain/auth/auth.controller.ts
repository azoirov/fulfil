import {AuthService} from "@/domain/auth/auth.service";
import {NextFunction, Request, Response} from "express";
import {LoginDto, SignUpDto} from "@/domain/auth/auth.dto";
import {validate} from "class-validator";
import {validationUtil} from "@utils/validation.util";
import StatusCode from "@enums/status-code.enum";

export class AuthController {
    public authService = new AuthService();

    public login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: LoginDto = req.body;

            await validationUtil(LoginDto, data);

            const result = await this.authService.login(data);

            res.status(StatusCode.Ok).json({
                data: result
            })
        } catch (error) {
            next(error)
        }
    }

    public signUp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data: SignUpDto = req.body;

            await validationUtil(SignUpDto, data);

            const result = await this.authService.signUp(data);

            res.status(StatusCode.Created).json({
                data: result
            })
        } catch (error) {
            next(error)
        }
    }
}