import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

import { Prisma } from "@prisma/client";
import { ZodError } from "zod";
import config from "../config";
import { IGenericErrorMessage } from "../types";
import handleValidationError from "../errors/validation-error";
import { ErrorHandler, handleZodError } from "../errors";
import handleClientError from "../errors/client-error";

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  config.env === "development"
    ? console.log(`🐱‍🏍 from global error handler ~~`, { err })
    : console.log(`🐱‍🏍 from global error handler ~~`, err);

  let statusCode = 500;
  let message = "Something went wrong !";
  let errorMessages: IGenericErrorMessage[] = [];

  if (err instanceof Prisma.PrismaClientValidationError) {
    const generalizedError = handleValidationError(err);
    statusCode = generalizedError.statusCode;
    message = generalizedError.message;
    errorMessages = generalizedError.errorMessages;
  } else if (err instanceof ZodError) {
    const generalizedError = handleZodError(err);
    statusCode = generalizedError.statusCode;
    message = generalizedError.message;
    errorMessages = generalizedError.errorMessages;
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const generalizedError = handleClientError(err);
    statusCode = generalizedError.statusCode;
    message = generalizedError.message;
    errorMessages = generalizedError.errorMessages;
  } else if (err instanceof ErrorHandler) {
    statusCode = err?.statusCode;
    message = err.message;
    errorMessages = err?.message
      ? [
          {
            path: "",
            message: err?.message,
          },
        ]
      : [];
  } else if (err instanceof Error) {
    message = err?.message;
    errorMessages = err?.message
      ? [
          {
            path: "",
            message: err?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== "production" ? err?.stack : undefined,
  });
};
