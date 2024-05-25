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

    deselectSelectmenu: builder.mutation({
      query: ({ id, userId }) => ({
        url: `select-menu/${id}`,
        method: "DELETE",
        params: { userId },
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

export const {
  useCreateSelectmenuMutation,
  useDeselectSelectmenuMutation,
  useGetSelectmenusQuery,
} = selectmenuApi;
