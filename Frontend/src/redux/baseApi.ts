import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1", //  process.env.REACT_APP_API_URL,
    prepareHeaders: async (headers /*{ getState } */) => {
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
