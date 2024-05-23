import express from "express";

import { authRouter } from "../../modules/auth/auth.route";
import { lunchMenuRouter } from "../../modules/lunch-menu/lunch-menu.route";

const router = express.Router();

const allRoutes = [
  { path: "/auth", route: authRouter },
  { path: "/lunch-menu", route: lunchMenuRouter },
];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
