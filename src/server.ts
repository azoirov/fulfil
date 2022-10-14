import App from "./app";
import UserRoute from "@/domain/user/user.route";

const app = new App([new UserRoute()]);

app.run()