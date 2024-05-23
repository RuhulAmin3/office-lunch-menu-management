import express from "express";
import { authController } from "./auth.controller";
import validateRequest from "../../common/middlewares/validationRequest";
import { authValidation } from "./auth.validation";

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
