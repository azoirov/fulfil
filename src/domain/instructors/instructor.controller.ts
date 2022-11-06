import { InstructorDto, CreateInstructorDto } from "@/domain/instructors/dto/instructor.dto"
import StatusCode from "@/enums/status-code.enum";
import { validation } from "@/utils/validation";
import { NextFunction, Request, Response } from "express";
import InstructorService from "./instructor.service";
import { IdDto } from "@/dtos/id.dto";


class InstructorController {
    public instructorService = new InstructorService();

    public create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const createData: CreateInstructorDto = req.body;

            await validation(CreateInstructorDto, createData);

            const result = await this.instructorService.create(createData);

            res.status(StatusCode.Created).json({
                data: result,
            });
        } catch (error) {
            next(error);
        }
    };

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
            const id: string = req.params.id;
            const result = await this.instructorService.getById(id);


            if (result == null) {
                res.status(StatusCode.NotFound).json({
                    data: result,
                });
            } else {
                res.status(StatusCode.Ok).json({
                    data: result,
                });
            }

        } catch (error) {
            next(error);
        }
    };

    public delete = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id: string = req.params.id;

            await validation(IdDto, { id });


            const result = await this.instructorService.deleteById(id);

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
            const updateData: Partial<InstructorDto> = req.body;

            await validation(InstructorDto, updateData, true);
            await validation(IdDto, { id });

            const result = await this.instructorService.update(id, updateData);

            res.status(StatusCode.Ok).json({
                data: result,
            });
        } catch (error) {
            next(error);
        }
    };
}

export default InstructorController;
