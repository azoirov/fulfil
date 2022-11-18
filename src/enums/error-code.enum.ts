enum ErrorCode {
  UserAlreadyExits = "USER_ALREADY_EXISTS",
  InstructorAlreadyExists = "INSTRUCTOR_ALREADY_EXISTS",
  ValidationError = "VALIDATION_ERROR",
  CourseSlugMustBeUnique = "COURSE_SLUG_MUST_BE_UNIQUE",
  ServerError = "INTERNAL_SERVER_ERROR",
  CourseNotFound = "COURSE_NOT_FOUND",
  SpNameMustBeUnique = "SP_NAME_MUST_BE_UNIQUE",
  SpNotFound = "SP_NOT_FOUND",
  InstructorNotFound = "INSTRUCTOR_NOT_FOUND",
  StudentAlreadyExists = "STUDEBT_ALREADY_EXISTS",
  StudentNotFound = "STUDENT_NOT_FOUND",
  LeadNotFound = "LEAD_NOT_FOUND",

}

export default ErrorCode;
