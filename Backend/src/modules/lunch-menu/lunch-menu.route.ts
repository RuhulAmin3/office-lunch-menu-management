import express from "express";
import { authenticate, validateRequest } from "../../common/middlewares";
import { lunchMenuValidation } from "./lunch-menu.validation";
import { lunchMenuController } from "./lunch-menu.controller";
import { ROLE } from "@prisma/client";

const router = express.Router();

router.post(
  "/",
  authenticate(ROLE.Admin),
  validateRequest(lunchMenuValidation.createLunchMenuSchema),
  lunchMenuController.createLunchMenu
);

router.get("/", authenticate(ROLE.Admin), lunchMenuController.getAllLunchMenu);

router.patch(
  "/:id",
  authenticate(ROLE.Admin),
  validateRequest(lunchMenuValidation.updateLunchMenuSchema),
  lunchMenuController.updateLunchMenu
);

export const lunchMenuRouter = router;
