import { InstructorDto, CreateInstructorDto } from "./dto/instructor.dto";
import ErrorCode from "@/enums/error-code.enum";
import BadRequestError from "@/errors/bad-request.error";
import NotFoundError from "@/errors/not-found.error";

import InstructorRepo from "./instructor.repo";



class InstructorService {
    public InstructorRepo = new InstructorRepo();

    public create = async (data: CreateInstructorDto): Promise<InstructorDto> => {


        const result = await this.InstructorRepo.create(data);
        return result;
    };

    public getAll = async (): Promise<InstructorDto[]> => {
        const result = await this.InstructorRepo.getAll();
        return result;
    };

    public getById = async (id: string): Promise<InstructorDto> => {
        const ins = await this.InstructorRepo.getById(id);
        if (!ins) throw new NotFoundError(ErrorCode.InstructorNotFound);

        const result = await this.InstructorRepo.getById(id);
        return result;
    };

    public deleteById = async (id: string): Promise<InstructorDto> => {
        const ins = await this.InstructorRepo.getById(id);
        if (!ins) throw new NotFoundError(ErrorCode.InstructorNotFound);

        const result = await this.InstructorRepo.deleteById(id);
        return result;
    };

    public update = async (
        id: string,
        updateData: Partial<InstructorDto>
    ): Promise<InstructorDto> => {
        const ins = await this.InstructorRepo.getById(id);
        if (!ins) throw new NotFoundError(ErrorCode.InstructorNotFound);

        const result = await this.InstructorRepo.update(id, updateData);
        return result;
    };
}

export default InstructorService;