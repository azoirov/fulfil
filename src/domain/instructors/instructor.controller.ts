import { IdDto } from "@/dtos/id.dto";
import StatusCode from "@/enums/status-code.enum";
import { validationUtil } from "@utils/validation.util";
import { NextFunction, Request, Response } from "express";
import { InstructorDto, CreateInstructorDto } from "./dto/instructor.dto";
import InstructorService from "./instructor.service";


class InstructorController {
    public instructorService = new InstructorService()

    public create = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const createData: CreateInstructorDto = req.body;
            await validationUtil(InstructorDto, createData);

            const result = await this.instructorService.create(createData);

            res.status(StatusCode.Created).json({
                data: result,
            })
        } catch(error) {
            next(error)
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const result = await this.instructorService.getAll();
          res.status(StatusCode.Ok).json({
            data: result,
          });
        } catch (error) {
          next(error);
        }
      };

      public getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id;          const result = await this.instructorService.getById(id);
          res.status(StatusCode.Ok).json({
            data: result,
          });
        } catch (error) {
          next(error);
        }
      };

      public update = async (req: Request, res: Response, next: NextFunction) => {
        try {
          const id: string = req.params.id;
          const updateData: Partial<InstructorDto> = req.body;
    
          await validationUtil(InstructorDto, updateData, true);
          await validationUtil(IdDto, { id });
    
          const result = await this.instructorService.update(id, updateData);
    
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

          const result = await this.instructorService.deleteById(id);
    
          res.status(StatusCode.Ok).json({
            data: result,
          });
        } catch (error) {
          next(error);
        }
      };
}

export default InstructorController;