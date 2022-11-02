enum StatusCode {
    Ok = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    Forbidden = 403,
    NotFound = 404,
    ValidationError = 422,
    ServerError = 500
    SpNameMustBeUnique = "SP_NAME_MUST_BE_UNIQUE",
    SpNotFound = "SP_NOT_FOUND",
}

export default StatusCode
