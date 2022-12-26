import {sign, verify} from "jsonwebtoken"
import {IPayload} from "@/domain/auth/auth.interface";
import UnauthorizedError from "@errors/unauthorized.error";
import ErrorCode from "@enums/error-code.enum";

export class JwtService {
    public generateToken = (payload: IPayload): string => sign(payload, process.env.ACCESS_TOKEN_SECRET)

    public verifyToken = (token: string): IPayload => {
        try {
            return verify(token, process.env.ACCESS_TOKEN_SECRET)
        } catch (error) {
            throw new UnauthorizedError(ErrorCode.TokenDoesNotExist)
        }
    }
}