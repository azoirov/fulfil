import { courseModel } from "./course.model";
import { CourseDto } from "./dto/course.dto";

class CourseRepo {
  public courseModel = courseModel;

  create = async (data: CourseDto): Promise<CourseDto> => {
    return this.courseModel.create(data);
  };

  getById = async (id: string): Promise<CourseDto> => {
    return this.courseModel.findById(id);
  };

  getBySlug = async (slug: string): Promise<CourseDto> => {
    return this.courseModel.findOne({
      slug,
    });
  };

  getAll = async (): Promise<CourseDto[]> => {
    return this.courseModel.find().lean();
  };

  update = async (id: string, data: Partial<CourseDto>): Promise<CourseDto> => {
    return this.courseModel.findByIdAndUpdate(id, data, { new: true });
  };

  deleteById = async (id: string): Promise<CourseDto> => {
    return this.courseModel.findByIdAndDelete(id);
  };
}

export default CourseRepo;
