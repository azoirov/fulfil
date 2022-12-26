import ErrorCode from "@/enums/error-code.enum";
import BadRequestError from "@/errors/bad-request.error";
import ConflictError from "@errors/conflict.error";
import NotFoundError from "@/errors/not-found.error";
import { CreateInstructorDto, InstructorDto } from "./dto/instructor.dto";
import InstructorRepo from "./instructor.repo";

class InstructorService {
    public instructorRepo = new InstructorRepo()

    public create = async (data: CreateInstructorDto): Promise<InstructorDto> => {
        const instructor = await this.instructorRepo.getByPhone(data.phone)

        if(instructor) throw new ConflictError(ErrorCode.InstructorAlreadyExists)

        return this.instructorRepo.create(data)
    }

    public getAll = async ():Promise<InstructorDto[]>  => {
        return this.instructorRepo.getAll();
      
    }

    public getById = async (id: string):Promise<InstructorDto>  => {
        const result = await this.instructorRepo.getById(id)
        if(!result) throw new NotFoundError(ErrorCode.InstructorNotFound)
        return result;
    }

    public update = async (
        id: string,
        updateData: Partial<InstructorDto>
      ): Promise<InstructorDto> => {
        const instructor = await this.instructorRepo.getById(id);
        if (!instructor) throw new NotFoundError(ErrorCode.SpNotFound);
    
        return this.instructorRepo.update(id, updateData);
      };

    public deleteById = async (id: string): Promise<InstructorDto> => {
        const instructor = await this.instructorRepo.getById(id);
        if (!instructor) throw new NotFoundError(ErrorCode.InstructorNotFound);
    
        return this.instructorRepo.deleteById(id);
       
      };
}

export default InstructorService;