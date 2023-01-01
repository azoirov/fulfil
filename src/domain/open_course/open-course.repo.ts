import { openCourseModel } from "./open-course.model";
import { OpenCourseDto, CreateOpenCourseDto} from "./dto/open-course.dto";

class OpenCourseRepo {
  public openCourseModel = openCourseModel;

  create = async (data: CreateOpenCourseDto): Promise<OpenCourseDto> => {
    return this.openCourseModel.create(data);
  };

  getById = async (id: string): Promise<OpenCourseDto> => {
    return this.openCourseModel.findById(id);
  };

  getBySlug = async (slug: string): Promise<OpenCourseDto> => {
    return this.openCourseModel.findOne({
      slug,
    });
  };

  getAllWithPage = async (page: number, limit: number): Promise<OpenCourseDto[]> => {
    return this.openCourseModel.find().skip((page - 1) * 10).limit(limit)
  };

  getAll = async (): Promise<OpenCourseDto[]> => {
    return this.openCourseModel.find().lean();
  };

  update = async (id: string, data: Partial<CreateOpenCourseDto>): Promise<OpenCourseDto> => {
    return this.openCourseModel.findByIdAndUpdate(id, data, { new: true });
  };

  deleteById = async (id: string): Promise<OpenCourseDto> => {
    return this.openCourseModel.findByIdAndDelete(id);
  };
}

export default OpenCourseRepo;
