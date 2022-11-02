import { IdDto } from "@/dtos/id.dto";
import StatusCode from "@/enums/status-code.enum";
import { validation } from "@/utils/validation";
import { NextFunction, Request, Response } from "express";
import SpService from "./sp.service";
import { spDto } from "./dto/sp.dto";

class SpController {
  public spService = new SpService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createData: spDto = req.body;

      await validation(spDto, createData);

      const result = await this.spService.create(createData);

      res.status(StatusCode.Created).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.spService.getAll();
      res.status(StatusCode.Ok).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: string = req.params.id;
      const result = await this.spService.getById(id);
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

      const result = await this.spService.deleteById(id);

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
      const updateData: Partial<spDto> = req.body;

      await validation(spDto, updateData, true);
      await validation(IdDto, { id });

      const result = await this.spService.update(id, updateData);

      res.status(StatusCode.Ok).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };
}

export default SpController;
