import {NextFunction, Request, Response} from "express";
import UnauthorizedError from "@errors/unauthorized.error";
import ErrorCode from "@enums/error-code.enum";
import {JwtService} from "@services/jwt.service";
import {IPayload} from "@/domain/auth/auth.interface";
import {IRequest} from "@interfaces/request.interface";

export const checkToken = (req: IRequest, res: Response, next: NextFunction) => {
    const jwtService = new JwtService();

    const token: string = req.headers['authorization'];
    if(!token) throw new UnauthorizedError(ErrorCode.TokenDoesNotExist)

    const payload: IPayload = jwtService.verifyToken(token);

    req.user = payload;

    next()
}