import BaseError from "@errors/base.error";
import ErrorCode from "@enums/error-code.enum";
import StatusCode from "@enums/status-code.enum";

class ForbiddenError extends BaseError {
    constructor(name: ErrorCode, message?: string) {
        super(name, StatusCode.Forbidden);

        this.message = message;
    }
}

export default ForbiddenError