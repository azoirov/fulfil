import { IdDto } from "@/dtos/id.dto";
import StatusCode from "@/enums/status-code.enum";
import { validation } from "@/utils/validation";
import { NextFunction, Request, Response } from "express";
import leadService from "./leads.service";
import {LeadDto } from "./dto/leads.dto";
import {Ilead} from "./leads.interface";

class leadController {
  public leadService = new leadService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createData: Ilead = req.body;
      
      await validation(LeadDto, createData);

      const result = await this.leadService.create(createData);

      res.status(StatusCode.Created).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await this.leadService.getAll();
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

      const result = await this.leadService.deleteById(id);

      res.status(200).json({
        data: result,
      });
    } catch (error) {
      next(error);
    }
  };

}

export default leadController;
