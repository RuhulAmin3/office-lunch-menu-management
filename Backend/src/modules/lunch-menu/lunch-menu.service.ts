import { LunchMenu } from "@prisma/client";
import { prisma } from "../../common/prisma";
import { ErrorHandler } from "../../common/errors";
import httpStatus from "http-status";

const createLunchMenu = async (
  payload: LunchMenu
): Promise<{ result: LunchMenu }> => {
  const create = await prisma.lunchMenu.create({
    data: payload,
  });

  if (!create) {
    throw new ErrorHandler(
      httpStatus.BAD_REQUEST,
      "failed to create lunch menu"
    );
  }

  return {
    result: create,
  };
};

const getAllLunchMenu = async (): Promise<{ result: LunchMenu[] }> => {
  const allLunchMenu = await prisma.lunchMenu.findMany({});

  return { result: allLunchMenu };
};

const updateLunchMenu = async (
  id: string,
  payload: Partial<LunchMenu>
): Promise<{ result: LunchMenu }> => {
  const isExist = await prisma.lunchMenu.findUnique({
    where: {
      id: id,
    },
  });

  if (!isExist)
    throw new ErrorHandler(httpStatus.NOT_FOUND, "lunch menu not found");

  const updatedResult = await prisma.lunchMenu.update({
    where: {
      id,
    },
    data: payload,
  });

  return { result: updatedResult };
};

export const lunchMenuService = {
  createLunchMenu,
  getAllLunchMenu,
  updateLunchMenu,
};
