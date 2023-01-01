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

     return await this.openCourseRepo.create(data);
  };

  public getAll = async (): Promise<OpenCourseDto[]> => {
    return await this.openCourseRepo.getAll();
    
  };

  public getBySlug = async (slug: string): Promise<OpenCourseDto> => {
    return  await this.openCourseRepo.getBySlug(slug);
    ;
  };

  public getAllWithPage = async (page: number, limit: number): Promise<OpenCourseDto[]> => {
    return await this.openCourseRepo.getAllWithPage(page, limit);
  };

  public deleteById = async (id: string): Promise<OpenCourseDto> => {
    const openCourse = await this.openCourseRepo.getById(id);
    if (!openCourse) throw new NotFoundError(ErrorCode.CourseNotFound);

    return await this.openCourseRepo.deleteById(id);
  };

  public update = async (
    id: string,
    updateData: Partial<CreateOpenCourseDto>
  ): Promise<OpenCourseDto> => {
    const openCourse = await this.openCourseRepo.getById(id);
    if (!openCourse) throw new NotFoundError(ErrorCode.CourseNotFound);

    return await this.openCourseRepo.update(id, updateData);
  };
}

export default OpenCourseService;
