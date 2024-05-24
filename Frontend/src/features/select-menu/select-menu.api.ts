import { baseApi } from "../../redux/baseApi";

export const selectmenuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSelectmenu: builder.mutation({
      query: (data) => ({
        url: "select-menu",
        method: "POST",
        body: data,
      }),
    }),

    getSelectmenus: builder.query({
      query: (date) => ({
        url: "select-menu",
        params: date,
      }),
    }),
  }),
});

export const { useCreateSelectmenuMutation, useGetSelectmenusQuery } =
  selectmenuApi;
