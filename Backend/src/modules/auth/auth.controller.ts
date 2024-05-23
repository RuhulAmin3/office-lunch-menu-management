import { NextFunction, Request, Response } from "express";
import { authService } from "./auth.service";
import httpStatus from "http-status";

const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.register(req.body);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "user created successfully",
      statusCode: httpStatus.CREATED,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await authService.login(req.body);

    res.status(httpStatus.OK).json({
      success: true,
      message: "user login successfully",
      statusCode: httpStatus.OK,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const authController = {
  register,
  login,
};
