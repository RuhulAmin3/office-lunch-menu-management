import { Navigate } from "react-router-dom";
import { getIntoLocalStorage } from "../common/utils"
import { TOKEN_KEY } from "../common/constants"
import { FC, ReactNode } from "react";
import { jwtDecode } from "jwt-decode";
import { ROLE } from "../common/types";

const AdminRoute: FC<{ children: ReactNode }> = ({ children }) => {
    const token = getIntoLocalStorage(TOKEN_KEY);
    if (token) {
        const { role }: { role: ROLE.Admin } = jwtDecode(token);
        if (role == ROLE.Admin) return children;
    }

    return <Navigate to={"/lunch-menus"} />
}

export default AdminRoute;