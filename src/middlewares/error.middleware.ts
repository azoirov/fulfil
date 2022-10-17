import { NextFunction, Request, Response } from "express";

export const errorResponder = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(error.statusCode).json({
    code: error.code,
    message: error.message,
  });
};
