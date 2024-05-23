import express from "express";
import { authController } from "./auth.controller";
import { authValidation } from "./auth.validation";
import { validateRequest } from "../../common/middlewares";
const router = express.Router();

router.post(
  "/register",
  validateRequest(authValidation.registerSchema),
  authController.register
);
router.post(
  "/login",
  validateRequest(authValidation.loginSchema),
  authController.login
);

export const authRouter = router;
