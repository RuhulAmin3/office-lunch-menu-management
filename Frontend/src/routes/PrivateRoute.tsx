import { Navigate } from "react-router-dom";
import { getIntoLocalStorage } from "../common/utils"
import { TOKEN_KEY } from "../common/constants"
import { FC, ReactNode } from "react";

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
    const token = getIntoLocalStorage(TOKEN_KEY);
    if (token) return children;
    return <Navigate to={"/login"} />
}

export default PrivateRoute