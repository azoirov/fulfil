import { spDto } from "./dto/sp.dto";
import ErrorCode from "@/enums/error-code.enum";
import BadRequestError from "@/errors/bad-request.error";
import NotFoundError from "@/errors/not-found.error";
import { createSlug } from "@services/slug.service";
import spRepo from "./sp.repo";



class SpService {
  public spRepo = new spRepo();

  public create = async (data: spDto): Promise<spDto> => {
    const { sp_name } = data;


    const old_sp_name = await this.spRepo.getBySpName(sp_name);
    if (old_sp_name) throw new BadRequestError(ErrorCode.SpNameMustBeUnique);

    const result = await this.spRepo.create(data);
    return result;
  };

  public getAll = async (): Promise<spDto[]> => {
    const result = await this.spRepo.getAll();
    return result;
  };

  public getById = async (id: string): Promise<spDto> => {
    const result = await this.spRepo.getById(id);
    return result;
  };

  public deleteById = async (id: string): Promise<spDto> => {
    const sp = await this.spRepo.getById(id);
    if (!sp) throw new NotFoundError(ErrorCode.SpNotFound);

    const result = await this.spRepo.deleteById(id);
    return result;
  };

  public update = async (
    id: string,
    updateData: Partial<spDto>
  ): Promise<spDto> => {
    const sp = await this.spRepo.getById(id);
    if (!sp) throw new NotFoundError(ErrorCode.SpNotFound);

    const result = await this.spRepo.update(id, updateData);
    return result;
  };
}

export default SpService;