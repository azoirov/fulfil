import { instructorModel } from "@/domain/instructors/instructor.model"
import { InstructorDto, CreateInstructorDto } from "@/domain/instructors/dto/instructor.dto"

class InstructorRepo {
    public instructorModel = instructorModel;

    getAll = async (): Promise<InstructorDto[]> => {
      return this.instructorModel.find().lean();
    };

    getById = async (id: string): Promise<InstructorDto> => {
        return this.instructorModel.findById(id);
      };


    getByPhone = async (phone: string): Promise<InstructorDto> => {
      return this.instructorModel.findOne({phone});
  }

    create = async (data: CreateInstructorDto): Promise<InstructorDto> => {
        return this.instructorModel.create(data);
      };

    deleteById = async (id: string): Promise<InstructorDto> => {
        return this.instructorModel.findByIdAndDelete(id);
      };

    update = async (id: string, data: Partial<InstructorDto>): Promise<InstructorDto> => {
        return this.instructorModel.findByIdAndUpdate(id, data, { new: true });
      };
}

export default InstructorRepo;