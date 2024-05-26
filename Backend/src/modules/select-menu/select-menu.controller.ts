import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { selectMenuService } from "./select-menu.service";

const selectLunchMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await selectMenuService.selectLunchMenu(req.body);

    res.status(httpStatus.CREATED).json({
      success: true,
      message: "lunch menu selected successfully",
      statusCode: httpStatus.CREATED,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
const deselectLunchMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.query;
    const { id } = req.params;

    const result = await selectMenuService.deselectLunchMenu(
      id,
      userId as string
    );

    res.status(httpStatus.OK).json({
      success: true,
      message: "lunch menu deselected successfully",
      statusCode: httpStatus.OK,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleSelectMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  try {
    const result = await selectMenuService.getSingleSelectMenu(id);

    res.status(httpStatus.OK).json({
      success: true,
      message: "select lunch menu retrived successfully",
      statusCode: httpStatus.OK,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getAllSelectedLunchMenu = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { date } = req.query || {};

  const { page = 1, limit = 10 } = req.query || {};

  try {
    const { result, meta } = await selectMenuService.getAllSelectedLunchMenu(
      date as string,
      {
        page: Number(page),
        limit: Number(limit),
      }
    );

    res.status(httpStatus.OK).json({
      success: true,
      message: "retrieved all lunch menu successfully",
      statusCode: httpStatus.OK,
      meta,
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const seletMenuController = {
  getAllSelectedLunchMenu,
  selectLunchMenu,
  getSingleSelectMenu,
  deselectLunchMenu,
};
