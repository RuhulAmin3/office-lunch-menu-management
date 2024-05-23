import { ROLE } from "@prisma/client";
import { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../errors";
import httpStatus from "http-status";
import { Jwt } from "../jwt";
import config from "../config";
import { Secret } from "jsonwebtoken";

export const authenticate = async (...roles: ROLE[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
      if (!token) {
        throw new ErrorHandler(httpStatus.UNAUTHORIZED, "unauthorized user");
      }

      //   check token validation
      const verifiedToken = Jwt.verifyToken(token, config.jwt.secret as Secret);
      req.user = verifiedToken;

      // check valid user or not for specific route
      if (roles.length && !roles.includes(verifiedToken.role)) {
        throw new ErrorHandler(httpStatus.FORBIDDEN, "forbidden user");
      }
    } catch (error) {
      next(error);
    }
  };
};
