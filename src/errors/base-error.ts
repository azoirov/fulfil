import ErrorCode from '@enums/error-code.enum';
import StatusCode from '@enums/status-code.enum';

class BaseError extends Error {
    public code: ErrorCode;
    public statusCode: StatusCode;
    public name: ErrorCode;

    constructor(code: ErrorCode, statusCode: StatusCode) {
        super();

        this.name = code;
        this.code = code;
        this.statusCode = statusCode;
    }
}

export default BaseError;