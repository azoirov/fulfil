enum ErrorCode {
  UserAlreadyExits = "USER_ALREADY_EXISTS",
  ValidationError = "VALIDATION_ERROR",
  CourseSlugMustBeUnique = "COURSE_SLUG_MUST_BE_UNIQUE",
  ServerError = "INTERNAL_SERVER_ERROR",
  CourseNotFound = "COURSE_NOT_FOUND",
}

export default ErrorCode;
