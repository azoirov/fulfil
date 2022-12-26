import {IPayload} from "@/domain/auth/auth.interface";
import {Request} from "express";

export interface IRequest extends Request{
    user: IPayload
}