import { spModel } from "./sp.model";
import { spDto } from "./dto/sp.dto";

class spRepo {
  public spModel = spModel;

  create = async (data: spDto): Promise<spDto> => {
    return this.spModel.create(data);
  };

  getBySpName = async (sp_name: string): Promise<spDto> => {
    return this.spModel.findOne({
        sp_name,
    });
  };

  getAll = async (): Promise<spDto[]> => {
    return this.spModel.find().lean();
  };


  getById = async (id: string): Promise<spDto> => {
    return this.spModel.findById(id);
  };


  deleteById = async (id: string): Promise<spDto> => {
    return this.spModel.findByIdAndDelete(id);
  };

  update = async (id: string, data: Partial<spDto>): Promise<spDto> => {
    return this.spModel.findByIdAndUpdate(id, data, { new: true });
  };
}

export default spRepo;
