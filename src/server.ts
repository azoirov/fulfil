import App from "./app";
import UserRoute from "@/domain/user/user.route";
import CourseRoute from "./domain/course/course.route";
import SpRoute from "./domain/students_projects/sp.route";
import InstructorRoute from "./domain/instructors/instructor.route";

const app = new App([new UserRoute(), new CourseRoute(), new InstructorRoute()]);

app.run();
