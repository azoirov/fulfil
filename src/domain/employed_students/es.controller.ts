import StatusCode from "@/enums/status-code.enum";
import { validation } from "@/utils/validation";
import { NextFunction, Request, Response } from "express";
import { CreateEmployedStudentsDto, EmployedStudentsDto } from "./dto/es.dto";
import EmployedStudensService from "./es.service";


class EmployedStudentsController {
    public employedStudensService = new EmployedStudensService()
    
    public create = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const createData: CreateEmployedStudentsDto = req.body;
            await validation(EmployedStudentsDto, createData);

            const result = await this.employedStudensService.create(createData);

            res.status(StatusCode.Created).json({
                data: result,
            })
        } catch(error) {
            next(error)
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const result = await this.employedStudensService.getAll();

            res.status(StatusCode.Ok).json({
                data: result,
            })
        } catch(error) {
            next(error)
        }
    }

    public getById = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const id: string  = req.params.id;
        
            const result = await this.employedStudensService.getById(id);

            res.status(StatusCode.Ok).json({
                data: result,
            })
        } catch(error) {
            next(error)
        }
    }

    public update = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const id: string = req.params.id
            const updateData: Partial<CreateEmployedStudentsDto> = req.body;
            await validation(EmployedStudentsDto, updateData, true);

            const result = await this.employedStudensService.update(id,updateData);

            res.status(StatusCode.Ok).json({
                data: result,
            })
        } catch(error) {
            next(error)
        }
    }

    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const id: string = req.params.id

            const result = await this.employedStudensService.deleteById(id);

            res.status(StatusCode.Ok).json({
                data: result,
            })
        } catch(error) {
            next(error)
        }
    }
}

export default EmployedStudentsController;