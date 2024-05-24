import { baseApi } from "../../redux/baseApi";

export const lunchmenuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createLunchmenu: builder.mutation({
      query: (data) => ({
        url: "lunch-menu",
        method: "POST",
        body: data,
        contentType: "multipart/form-data",
      }),
    }),

    getLunchmenus: builder.query({
      query: (date) => ({
        url: "lunch-menu",
        method: "GET",
        params: date,
      }),
    }),
  }),
});

export const { useCreateLunchmenuMutation, useGetLunchmenusQuery } =
  lunchmenuApi;
