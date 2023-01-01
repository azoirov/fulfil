import { IdDto } from "@/dtos/id.dto";
import StatusCode from "@/enums/status-code.enum";
import { validation } from "@/utils/validation";
import { NextFunction, Request, Response } from "express";
import { CreateOpenCourseDto } from "./dto/open-course.dto";
import OpenCourseService from "./open-course.service";

class OpenCourseController {
  public openCourseService = new OpenCourseService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createData: CreateOpenCourseDto = req.body;

      await validation(CreateOpenCourseDto, createData);

      const result = await this.openCourseService.create(createData);

      res.status(StatusCode.Created).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.openCourseService.getAll();

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

      const result = await this.openCourseService.getBySlug(slug);

      res.status(StatusCode.Ok).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  public getAllWithPage = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const page: number = parseInt(req.query.page as any) || 1;
      const limit: number = parseInt(req.query.limit as any) || 10;

      const result = await this.openCourseService.getAllWithPage(page, limit);

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

      const result = await this.openCourseService.deleteById(id);

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
      const updateData: Partial<CreateOpenCourseDto> = req.body;

      await validation(CreateOpenCourseDto, updateData, true);
      await validation(IdDto, { id });

      const result = await this.openCourseService.update(id, updateData);

      res.status(StatusCode.Ok).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default OpenCourseController;
