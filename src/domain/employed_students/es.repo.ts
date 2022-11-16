import { CreateEmployedStudentsDto, EmployedStudentsDto } from "./dto/es.dto";
import { employedStudentsModel } from "./es.model";


class EmployedStudentsRepo {
    private employedStudentsModel: typeof employedStudentsModel;

    constructor() {
        this.employedStudentsModel = employedStudentsModel
    }

    public create = async (data: CreateEmployedStudentsDto): Promise<EmployedStudentsDto> => {
        return this.employedStudentsModel.create(data)
    };

    public getById = async (id: String): Promise<EmployedStudentsDto> => {
        return this.employedStudentsModel.findById(id)
    };

    public getByFullName = async (fullName: String): Promise<EmployedStudentsDto> => {
        return this.employedStudentsModel.findOne({fullName})
    };

    public getAll = async (): Promise<EmployedStudentsDto[]> => {
        return this.employedStudentsModel.find().lean();
    };

    public update = async (id: String, data: Partial<CreateEmployedStudentsDto>): Promise<EmployedStudentsDto> => {
        return this.employedStudentsModel.findByIdAndUpdate(id, data, {new: true});
    };

    public deleteById = async (id: string): Promise<EmployedStudentsDto> => {
        return this.employedStudentsModel.findByIdAndDelete(id);
    };

}

export default EmployedStudentsRepo;