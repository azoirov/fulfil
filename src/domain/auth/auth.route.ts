import {Router} from "express";
import {AuthController} from "@/domain/auth/auth.controller";

export class AuthRoute {
    public path: string = `/users/auth`;
    public router = Router()
    public authController = new AuthController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`${this.path}/login`, this.authController.login)
        this.router.post(`${this.path}/signup`, this.authController.signUp)
    }
}