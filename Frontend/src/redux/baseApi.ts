import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: async (headers) => {
      // const token = getState()?.auth?.accessToken;
      // if (token) {
      //   headers.set("authorization", `Bearer ${token}`);
      // }
      return headers;
    },
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
