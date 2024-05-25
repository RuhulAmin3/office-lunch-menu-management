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
import AdminLayout from "../Layout/AdminLayout";

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
        path: "/",
        element: <AdminRoute>
            <AdminLayout />
        </AdminRoute>,
        children: [
            {
                path: "/select-menus",
                element: <SelectmenuList />
            },
            {
                path: "/create-lunch-menu",
                element: <CreateLunchmenu />
            }
        ]
    },
    {
        path: "*",
        element: <NotFound />
    }
])