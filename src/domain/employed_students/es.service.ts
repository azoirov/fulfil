import ErrorCode from "@/enums/error-code.enum";
import BadRequestError from "@/errors/bad-request.error";
import ConflictError from "@errors/conflict.error";
import NotFoundError from "@/errors/not-found.error";
import { CreateEmployedStudentsDto, EmployedStudentsDto } from "./dto/es.dto";
import EmployedStudentsRepo from "./es.repo";


class EmployedStudensService {
    public employedStudentsRepo = new EmployedStudentsRepo()

    public create = async (data: CreateEmployedStudentsDto): Promise<EmployedStudentsDto> => {
        const student = await this.employedStudentsRepo.getByFullName(data.fullName);

        if(student) throw new ConflictError(ErrorCode.StudentAlreadyExists);

        return this.employedStudentsRepo.create(data);
    }

    public getAll = async (): Promise<EmployedStudentsDto[]> => {
        return this.employedStudentsRepo.getAll();
    }

    public getById = async (id: string): Promise<EmployedStudentsDto> => {
        const result = await this.employedStudentsRepo.getById(id);

        if(!result) throw new NotFoundError(ErrorCode.InstructorNotFound);

        return result

    }

    public update = async (id: string, updateData: Partial<CreateEmployedStudentsDto>): Promise<EmployedStudentsDto> => {
        const student = await this.employedStudentsRepo.getById(id);

        if(!student) throw new NotFoundError(ErrorCode.StudentNotFound);

        return this.employedStudentsRepo.update(id, updateData);
    }

    public deleteById = async (id: string): Promise<EmployedStudentsDto> => {
        const student = await this.employedStudentsRepo.getById(id);

        if(!student) throw new NotFoundError(ErrorCode.StudentNotFound)

        return this.employedStudentsRepo.deleteById(id);
    }
}

export default EmployedStudensService;

