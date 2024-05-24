import { TOKEN_KEY } from "../../common/constants";
import { getIntoLocalStorage } from "../../common/utils";

export const isLoggedIn = () => {
  const token = getIntoLocalStorage(TOKEN_KEY);

  return !!token;
};

export const userLogout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
