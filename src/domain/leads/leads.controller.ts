import { IdDto } from "@/dtos/id.dto";
import StatusCode from "@/enums/status-code.enum";
import { validationUtil } from "@utils/validation.util";
import { NextFunction, Request, Response } from "express";
import LeadService from "./leads.service";
import {LeadDto } from "./dto/leads.dto";
import {Ilead} from "./leads.interface";

class leadController {
  public leadService = new LeadService();

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createData: Ilead = req.body;
      
      await validationUtil(LeadDto, createData);

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
      await validationUtil(IdDto, { id });

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
