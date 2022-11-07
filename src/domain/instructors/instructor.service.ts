import ErrorCode from "@/enums/error-code.enum";
import BadRequestError from "@/errors/bad-request.error";
import NotFoundError from "@/errors/not-found.error";
import { CreateInstructorDto, InstructorDto } from "./dto/instructor.dto";
import InstructorRepo from "./instructor.repo";

class InstructorService {
    public InstructorRepo = new InstructorRepo()

    public create = async (data: CreateInstructorDto): Promise<InstructorDto> => {
        const instructor = await this.InstructorRepo.getByPhone(data.phone)

        if(instructor) throw new BadRequestError(ErrorCode.InstructorAlreadyExists)

        return this.InstructorRepo.create(data)
    }

    public getAll = async ():Promise<InstructorDto[]>  => {
        const result = await this.InstructorRepo.getAll()
        return result;
    }

    public getById = async (id: string):Promise<InstructorDto>  => {
        const result = await this.InstructorRepo.getById(id)
        return result;
    }

    public update = async (
        id: string,
        updateData: Partial<InstructorDto>
      ): Promise<InstructorDto> => {
        const instructor = await this.InstructorRepo.getById(id);
        if (!instructor) throw new NotFoundError(ErrorCode.SpNotFound);
    
        const result = await this.InstructorRepo.update(id, updateData);
        return result;
      };

    public deleteById = async (id: string): Promise<InstructorDto> => {
        const instructor = await this.InstructorRepo.getById(id);
        if (!instructor) throw new NotFoundError(ErrorCode.InstructorNotFound);
    
        const result = await this.InstructorRepo.deleteById(id);
        return result;
      };
}

export default InstructorService;