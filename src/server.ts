import App from "./app";
import UserRoute from "@/domain/user/user.route";
import CourseRoute from "./domain/course/course.route";

const app = new App([new UserRoute(), new CourseRoute()]);

app.run();
