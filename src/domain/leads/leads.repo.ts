import { leadModel } from "./leads.model";
import { CreateLeadDto, LeadDto } from "./dto/leads.dto";

class leadRepo {
  public leadModel = leadModel;

  create = async (data: CreateLeadDto): Promise<CreateLeadDto> => {
    return this.leadModel.create(data);
  };


  getAll = async (): Promise<LeadDto[]> => {
    return this.leadModel.find().lean();
  };

  getById = async (id: string): Promise<LeadDto> => {
    return this.leadModel.findById(id);
  };

  deleteById = async (id: string): Promise<LeadDto> => {
    return this.leadModel.findByIdAndDelete(id);
  };

}

export default leadRepo;
