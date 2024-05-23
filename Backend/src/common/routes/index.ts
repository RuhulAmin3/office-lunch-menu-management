import express from "express";

import { authRouter } from "../../modules/auth/auth.route";
import { lunchMenuRouter } from "../../modules/lunch-menu/lunch-menu.route";
import { selectMenuRouter } from "../../modules/select-menu/select-menu.route";

const router = express.Router();

const allRoutes = [
  { path: "/auth", route: authRouter },
  { path: "/lunch-menu", route: lunchMenuRouter },
  { path: "/select-menu", route: selectMenuRouter },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
