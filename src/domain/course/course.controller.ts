import { IdDto } from "@/dtos/id.dto";
import StatusCode from "@/enums/status-code.enum";
import { validation } from "@/utils/validation";
import { NextFunction, Request, Response } from "express";
import CourseService from "./course.service";
import { CourseDto } from "./dto/course.dto";

class CourseController {
  public courseService = new CourseService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createData: CourseDto = req.body;

      await validation(CourseDto, createData);

      const result = await this.courseService.create(createData);

      res.status(StatusCode.Created).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.courseService.getAll();

      res.status(StatusCode.Ok).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  public getBySlug = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const slug: string = req.params.slug;

      const result = await this.courseService.getBySlug(slug);

      res.status(StatusCode.Ok).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;

      await validation(IdDto, { id });

      const result = await this.courseService.deleteById(id);

      res.status(200).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;
      const updateData: Partial<CourseDto> = req.body;

      await validation(CourseDto, updateData, true);
      await validation(IdDto, { id });

      const result = await this.courseService.update(id, updateData);

      res.status(StatusCode.Ok).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default CourseController;
