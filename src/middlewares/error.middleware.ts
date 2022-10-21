import ErrorCode from "@/enums/error-code.enum";
import StatusCode from "@/enums/status-code.enum";
import { NextFunction, Request, Response } from "express";

export const errorResponder = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error.statusCode) {
    res.status(error.statusCode).json({
      code: error.code,
      message: error.message,
    });
  } else {
    res.status(StatusCode.ServerError).json({
      code: ErrorCode.ServerError,
      message: error.message,
    });
  }
};
