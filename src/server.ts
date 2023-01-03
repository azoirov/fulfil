import App from "./app";
import CourseRoute from "./domain/course/course.route";
import SpRoute from "./domain/students_projects/sp.route";
import LeadRoute from "./domain/leads/leads.route";
import {AuthRoute} from "@/domain/auth/auth.route";
import InstructorRoute from "./domain/instructors/instructor.route";
import EmployedStudentsRoute from "./domain/employed_students/es.route";
import OpenCourseRoute from "./domain/open_course/open-course.route";

const app = new App([ new CourseRoute(), new LeadRoute(), new AuthRoute(), new SpRoute(), new InstructorRoute(), new EmployedStudentsRoute(), new OpenCourseRoute()]) 

app.run();
