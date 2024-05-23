import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LunchmenuList from "../pages/LunchmenuList";
import CreateLunchmenu from "../pages/CreateLunchmenu";
import SelectmenuList from "../pages/SelectmenuList";

export const router = createBrowserRouter([
    {
        path: "/lunch-menu",
        element: <LunchmenuList />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/create-lunch-menu",
        element: <CreateLunchmenu />
    },
    {
        path: "/select-menus",
        element: <SelectmenuList />
    }

])