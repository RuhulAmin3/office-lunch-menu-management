import { NextFunction, Request, Response } from "express";
import { lunchMenuService } from "./lunch-menu.service";
import httpStatus from "http-status";

const createLunchMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await lunchMenuService.createLunchMenu(req.body);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "lunch menu created successfully",
      statusCode: httpStatus.CREATED,
      data: result.result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllLunchMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await lunchMenuService.getAllLunchMenu();

    res.status(httpStatus.OK).json({
      success: true,
      message: "retrieved all lunch menu successfully",
      statusCode: httpStatus.OK,
      data: result.result,
    });
  } catch (err) {
    next(err);
  }
};

const updateLunchMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const result = await lunchMenuService.updateLunchMenu(id, req.body);

    res.status(httpStatus.OK).json({
      success: true,
      message: "update lunch menu successfully",
      statusCode: httpStatus.OK,
      data: result.result,
    });
  } catch (err) {
    next(err);
  }
};

export const lunchMenuController = {
  createLunchMenu,
  getAllLunchMenu,
  updateLunchMenu,
};
