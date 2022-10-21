import ErrorCode from "@/enums/error-code.enum";
import BadRequestError from "@/errors/bad-request.error";
import NotFoundError from "@/errors/not-found.error";
import { createSlug } from "@/utils/slug.service";
import CourseRepo from "./course.repo";
import { CourseDto } from "./dto/course.dto";

class CourseService {
  public courseRepo = new CourseRepo();

  public create = async (data: CourseDto): Promise<CourseDto> => {
    const { title } = data;
    const slug = createSlug(title);

    data.slug = slug;

    const course = await this.courseRepo.getBySlug(slug);
    if (course) throw new BadRequestError(ErrorCode.CourseSlugMustBeUnique);

    const result = await this.courseRepo.create(data);
    return result;
  };

  public getAll = async (): Promise<CourseDto[]> => {
    const result = await this.courseRepo.getAll();
    return result;
  };

  public getBySlug = async (slug: string): Promise<CourseDto> => {
    const result = await this.courseRepo.getBySlug(slug);
    return result;
  };

  public deleteById = async (id: string): Promise<CourseDto> => {
    const course = await this.courseRepo.getById(id);
    if (!course) throw new NotFoundError(ErrorCode.CourseNotFound);

    const result = await this.courseRepo.deleteById(id);
    return result;
  };

  public update = async (
    id: string,
    updateData: Partial<CourseDto>
  ): Promise<CourseDto> => {
    const course = await this.courseRepo.getById(id);
    if (!course) throw new NotFoundError(ErrorCode.CourseNotFound);

    const result = await this.courseRepo.update(id, updateData);
    return result;
  };
}

export default CourseService;
