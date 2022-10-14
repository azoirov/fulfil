import {Router} from "express";
import UserController from "@/domain/user/user.controller";

class UserRoute {
    public router = Router()
    public userController = new UserController()
    public path = '/users'

    constructor() {
        this.initializeRoutes()
    }

    private initializeRoutes = () => {
        this.router.get(this.path, (req, res) => {
            res.send("ok")
        })
        this.router.post(`${this.path}/register`, this.userController.create)
    }
}

export default UserRoute
