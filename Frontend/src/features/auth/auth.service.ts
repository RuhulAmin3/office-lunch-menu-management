import { jwtDecode } from "jwt-decode";
import { TOKEN_KEY } from "../../common/constants";
import { getIntoLocalStorage } from "../../common/utils";

export const isLoggedIn = () => {
  const token = getIntoLocalStorage(TOKEN_KEY);

  return !!token;
};

export const userLogout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getUserInfo = () => {
  const token = getIntoLocalStorage(TOKEN_KEY);

  const userInfo: { role: string; userId: string } = jwtDecode(token as string);

  return userInfo;
};
