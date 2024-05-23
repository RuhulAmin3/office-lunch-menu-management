import express from "express";

const router = express.Router();

const allRoutes = [{ path: "/auth/register", route: () => {} }];

allRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
