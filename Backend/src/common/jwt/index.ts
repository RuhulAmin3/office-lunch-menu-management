import jwt, { JwtPayload, Secret } from "jsonwebtoken";

const createToken = (
  payload: Record<string, unknown>,
  secret: Secret,
  expiresIn: string
): string => {
  const token = jwt.sign(payload, secret, { expiresIn: expiresIn });
  return token;
};

const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const Jwt = {
  createToken,
  verifyToken,
};
