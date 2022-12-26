import {LeadDto } from "./dto/leads.dto";
import ErrorCode from "@/enums/error-code.enum";
import BadRequestError from "@/errors/bad-request.error";
import NotFoundError from "@/errors/not-found.error";
import leadRepo from "./leads.repo";
import {Ilead} from "./leads.interface";



class leadService {
  public leadRepo = new leadRepo();

  public create = async (data: Ilead): Promise<Ilead> => {
    const result = await this.leadRepo.create(data);
    return result;
  };

  public getAll = async (): Promise<LeadDto[]> => {
    const result = await this.leadRepo.getAll();
    return result;
  };


  public deleteById = async (id: string): Promise<LeadDto> => {
    const lead = await this.leadRepo.getById(id);
    if (!lead) throw new NotFoundError(ErrorCode.LeadNotFound);

    const result = await this.leadRepo.deleteById(id);
    return result;
  };

}

export default leadService;
