import {IRequest} from "@interfaces/request.interface";
import {NextFunction, Response} from "express";
import {UserRole} from "@/domain/user/user.enum";
import ForbiddenError from "@errors/forbidden.error";
import ErrorCode from "@enums/error-code.enum";

export const checkRole = (userRole: UserRole) => {
    return async (req: IRequest, res: Response, next: NextFunction) => {
        try {
            const isAllowed = req.user.role === userRole;
            if (!isAllowed) throw new ForbiddenError(ErrorCode.AccessDenied)

            next()
        } catch (error) {
            next(error)
        }
    }
}