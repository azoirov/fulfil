import App from "./app";
import UserRoute from "@/domain/user/user.route";
import CourseRoute from "./domain/course/course.route";
import SpRoute from "./domain/students_projects/sp.route";
import LeadRoute from "./domain/leads/leads.route";
import {AuthRoute} from "@/domain/auth/auth.route";

const app = new App([new UserRoute(), new CourseRoute(), new LeadRoute(), new AuthRoute(), new SpRoute()]);

app.run();
