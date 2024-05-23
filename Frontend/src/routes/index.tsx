import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LunchmenuList from "../pages/LunchmenuList";
import CreateLunchmenu from "../pages/CreateLunchmenu";
import SelectmenuList from "../pages/SelectmenuList";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
        path: "/lunch-menus",
        element: <PrivateRoute>
            <LunchmenuList />
        </PrivateRoute>
    },
    {
        path: "/login",
        element: <PublicRoute>
            <Login />
        </PublicRoute>
    },
    {
        path: "/register",
        element: <PublicRoute>
            <Register />
        </PublicRoute>
    },
    {
        path: "/create-lunch-menu",
        element: <AdminRoute><CreateLunchmenu /></AdminRoute>
    },
    {
        path: "/select-menus",
        element: <AdminRoute><SelectmenuList /></AdminRoute>
    },
    {
        path: "*",
        element: <NotFound />
    }

])