import express from "express";

import { authRouter } from "../../modules/auth/auth.route";

const router = express.Router();

const allRoutes = [{ path: "/auth", route: authRouter }];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
