import { Navigate } from "react-router-dom";
import { getIntoLocalStorage } from "../common/utils"
import { TOKEN_KEY } from "../common/constants"
import { FC, ReactNode } from "react";

const PublicRoute: FC<{ children: ReactNode }> = ({ children }) => {
    const token = getIntoLocalStorage(TOKEN_KEY);
    if (!token) return children;
    return <Navigate to={"/lunch-menus"} />
}

export default PublicRoute