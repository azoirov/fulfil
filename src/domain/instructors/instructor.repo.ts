import { instructorModel } from "@/domain/instructors/instructor.model"
import { InstructorDto, CreateInstructorDto } from "@/domain/instructors/dto/instructor.dto"

class InstructorRepo {
    private instructorModel: typeof instructorModel

    constructor() {
        this.instructorModel = instructorModel
    }

    public getById = async (id: string): Promise<InstructorDto> => {
        return this.instructorModel.findById(id);
      };

    public getByfirstName = async (firstName: string): Promise<InstructorDto> => {
        return this.instructorModel.findById(firstName);
      };

    public create = async (data: CreateInstructorDto): Promise<InstructorDto> => {
        return this.instructorModel.create(data);
      };
}

export default InstructorRepo;