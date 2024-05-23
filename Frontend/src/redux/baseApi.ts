import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getIntoLocalStorage } from "../common/utils";
import { TOKEN_KEY } from "../common/utils/constants";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: async (headers) => {
      const token = getIntoLocalStorage(TOKEN_KEY);
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
