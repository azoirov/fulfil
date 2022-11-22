import {leadModel} from "./leads.model";
import {LeadDto} from "./dto/leads.dto";
import {Ilead} from "./leads.interface";

class leadRepo {
    public leadModel = leadModel;

    create = async (data: Ilead): Promise<Ilead> => {
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
