import bcrypt from "bcrypt";

import { ROLE, User } from "@prisma/client";
import { prisma } from "../../common/prisma";
import { ErrorHandler } from "../../common/errors";
import httpStatus from "http-status";
import { Jwt } from "../../common/jwt";
import config from "../../common/config";

const register = async (
  payload: User
): Promise<{ result: User; token: string }> => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (isUserExist) {
    throw new ErrorHandler(httpStatus.CONFLICT, "user already exist");
  }

  const hashedPassword = bcrypt.hashSync(
    payload.password,
    Number(config.bycrypt_salt_rounds)
  );

  payload.password = hashedPassword;

  const result = await prisma.user.create({
    data: payload,
  });

  const token_payload = { userId: result.id, role: result.role };

  const access_token = Jwt.createToken(
    token_payload,
    config.jwt.secret as string,
    config.jwt.expires_in as string
  );

  result.password = "";

  return {
    result: result,
    token: access_token,
  };
};

const login = async (payload: {
  email: string;
  password: string;
}): Promise<{ token: string }> => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!isUserExist) {
    throw new ErrorHandler(httpStatus.UNAUTHORIZED, "wrong credientials");
  }

  const isPasswordMatched = bcrypt.compareSync(
    payload.password,
    isUserExist.password
  );

  if (!isPasswordMatched) {
    throw new ErrorHandler(httpStatus.UNAUTHORIZED, "wrong credientials");
  }

  const token_payload = { userId: isUserExist.id, role: isUserExist.role };

  const access_token = Jwt.createToken(
    token_payload,
    config.jwt.secret as string,
    config.jwt.expires_in as string
  );

  return {
    token: access_token,
  };
};

export const authService = {
  register,
  login,
};
