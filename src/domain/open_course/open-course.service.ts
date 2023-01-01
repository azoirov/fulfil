import ErrorCode from "@/enums/error-code.enum";
import BadRequestError from "@/errors/bad-request.error";
import NotFoundError from "@/errors/not-found.error";
import { createSlug } from "@/utils/slug.service";
import { CreateOpenCourseDto, OpenCourseDto } from "./dto/open-course.dto";
import OpenCourseRepo from "./open-course.repo";

class OpenCourseService {
  public openCourseRepo = new OpenCourseRepo();

  public create = async (data: CreateOpenCourseDto): Promise<OpenCourseDto> => {
    const { title } = data;
    const slug = createSlug(title);

    data.slug = slug;

    const openCourse = await this.openCourseRepo.getBySlug(slug);
    if (openCourse) throw new BadRequestError(ErrorCode.CourseSlugMustBeUnique);

    const result = await this.openCourseRepo.create(data);
    return result;
  };

  public getAll = async (): Promise<OpenCourseDto[]> => {
    const result = await this.openCourseRepo.getAll();
    return result;
  };

  public getBySlug = async (slug: string): Promise<OpenCourseDto> => {
    const result = await this.openCourseRepo.getBySlug(slug);
    return result;
  };

  public getByPage = async (page, limit): Promise<OpenCourseDto[]> => {
    if(!page) page = 1;
    if(!limit) limit = 10
    const result = await this.openCourseRepo.getByPage(page, limit);
    return result;
  };

  public deleteById = async (id: string): Promise<OpenCourseDto> => {
    const openCourse = await this.openCourseRepo.getById(id);
    if (!openCourse) throw new NotFoundError(ErrorCode.CourseNotFound);

    const result = await this.openCourseRepo.deleteById(id);
    return result;
  };

  public update = async (
    id: string,
    updateData: Partial<CreateOpenCourseDto>
  ): Promise<OpenCourseDto> => {
    const openCourse = await this.openCourseRepo.getById(id);
    if (!openCourse) throw new NotFoundError(ErrorCode.CourseNotFound);

    const result = await this.openCourseRepo.update(id, updateData);
    return result;
  };
}

export default OpenCourseService;
