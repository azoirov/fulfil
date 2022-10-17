import { validate, ValidationError } from "class-validator";
import { plainToClass } from "class-transformer";
import ErrorCode from "@/enums/error-code.enum";
import BadRequestError from "@/errors/bad-request.error";

interface IValidatorOptions {
  skipMissingProperties: boolean;
}

export const validation = async (
  type: any,
  body: any,
  skipMissingProperties?: boolean
): Promise<void> => {
  const validationOptions: IValidatorOptions = {
    skipMissingProperties,
  };

  const errors: ValidationError[] = await validate(
    plainToClass(type, body),
    validationOptions
  );

  if (errors.length > 0) {
    const message = errors.map(
      (error: ValidationError) =>
        error.constraints && Object.values(error.constraints)
    );

    throw new BadRequestError(
      ErrorCode.ValidationError,
      JSON.stringify(message)
    );
  }
};
