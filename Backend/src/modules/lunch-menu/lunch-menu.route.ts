import express, { NextFunction, Request, Response } from "express";
import { authenticate, validateRequest } from "../../common/middlewares";
import { lunchMenuValidation } from "./lunch-menu.validation";
import { lunchMenuController } from "./lunch-menu.controller";
import { ROLE } from "@prisma/client";
import { ImageUploader } from "../../common/uploader";

const router = express.Router();

router.post(
  "/",
  authenticate(ROLE.Admin),
  ImageUploader.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = lunchMenuValidation.createLunchMenuSchema.parse(
      JSON.parse(req.body.data)
    );

    return lunchMenuController.createLunchMenu(req, res, next);
  }
);

router.get(
  "/",
  authenticate(ROLE.Admin, ROLE.Employee),
  lunchMenuController.getAllLunchMenu
);

router.get(
  "/:id",
  authenticate(ROLE.Admin),
  lunchMenuController.getSingleLunchMenu
);

router.patch(
  "/:id",
  authenticate(ROLE.Admin),
  validateRequest(lunchMenuValidation.updateLunchMenuSchema),
  lunchMenuController.updateLunchMenu
);

export const lunchMenuRouter = router;
