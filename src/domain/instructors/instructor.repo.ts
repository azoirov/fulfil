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

  public create = async (data: CreateInstructorDto): Promise<InstructorDto> => {
    return this.instructorModel.create(data);
  };

  public getAll = async (): Promise<InstructorDto[]> => {
    return this.instructorModel.find().lean();
  };

  public deleteById = async (id: string): Promise<InstructorDto> => {
    return this.instructorModel.findByIdAndDelete(id);
  };

  public update = async (id: string, data: Partial<InstructorDto>): Promise<InstructorDto> => {
    return this.instructorModel.findByIdAndUpdate(id, data, { new: true });
  };
}

export default InstructorRepo;