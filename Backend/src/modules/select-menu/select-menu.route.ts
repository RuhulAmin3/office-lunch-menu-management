import express from "express";
import { seletMenuController } from "./select-menu.controller";
import { authenticate, validateRequest } from "../../common/middlewares";
import { ROLE } from "@prisma/client";
import { selectMenuValidation } from "./select-menu.validation";

const router = express.Router();

router.post(
  "/",
  authenticate(ROLE.Employee),
  validateRequest(selectMenuValidation.createSelectMenuSchema),
  seletMenuController.selectLunchMenu
);

router.get(
  "/",
  authenticate(ROLE.Admin),
  seletMenuController.getAllSelectedLunchMenu
);

export const selectMenuRouter = router;
