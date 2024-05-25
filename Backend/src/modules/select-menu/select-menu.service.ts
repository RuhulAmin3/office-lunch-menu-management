import { SelectMenu } from "@prisma/client";
import { prisma } from "../../common/prisma";
import { ErrorHandler } from "../../common/errors";
import httpStatus from "http-status";

const selectLunchMenu = async (payload: SelectMenu): Promise<SelectMenu> => {
  const isExist = await prisma.selectMenu.findFirst({
    where: {
      lunchMenuId: payload.lunchMenuId,
      userId: payload.userId,
      date: payload.date,
    },
  });

  if (isExist)
    throw new ErrorHandler(
      httpStatus.CONFLICT,
      "this lunch menu already selected for you today"
    );

  const result = await prisma.selectMenu.create({
    data: payload,
    include: {
      user: true,
      lunchMenu: true,
    },
  });

  return result;
};

const deselectLunchMenu = async (
  id: string,
  userId: string
): Promise<SelectMenu> => {
  const isExist = await prisma.selectMenu.findFirst({
    where: {
      lunchMenuId: id,
      userId,
    },
  });

  if (!isExist)
    throw new ErrorHandler(
      httpStatus.NOT_FOUND,
      "this lunch menu does not selected yet for you"
    );

  const result = await prisma.selectMenu.delete({
    where: {
      id: isExist.id,
    },
  });

  return result;
};

const getAllSelectedLunchMenu = async (
  date: string,
  paginationOptions: { page: number; limit: number }
): Promise<{
  result: SelectMenu[];
  meta: { page: number; limit: number; total: number };
}> => {
  const { page, limit } = paginationOptions;

  const queryDate = new Date(date);

  const query = { date: queryDate };

  const skip = (page - 1) * limit;

  const allSelectedMenu = await prisma.selectMenu.findMany({
    where: query,
    include: {
      lunchMenu: true,
      user: true,
    },
    take: limit,
    skip,
  });

  const total = await prisma.selectMenu.count({ where: query });

  return { result: allSelectedMenu, meta: { page, limit, total } };
};

const getSingleSelectMenu = async (id: string) => {
  const result = await prisma.selectMenu.findUnique({
    where: {
      id,
    },
  });

  if (!result)
    throw new ErrorHandler(httpStatus.NOT_FOUND, "select menu not found");
};

export const selectMenuService = {
  getAllSelectedLunchMenu,
  selectLunchMenu,
  getSingleSelectMenu,
  deselectLunchMenu,
};
