import { baseApi } from "../../redux/baseApi";

export const selectmenuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createSelectmenu: builder.mutation({
      query: (data) => ({
        url: "select-menu",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["select-menu"],
    }),

    deselectSelectmenu: builder.mutation({
      query: ({ id, userId }) => ({
        url: `select-menu/${id}`,
        method: "DELETE",
        params: { userId },
      }),
      invalidatesTags: ["select-menu"],
    }),

    getSelectmenus: builder.query({
      query: (date) => ({
        url: "select-menu",
        params: date,
      }),
      providesTags: ["select-menu"],
    }),
  }),
});

export const {
  useCreateSelectmenuMutation,
  useDeselectSelectmenuMutation,
  useGetSelectmenusQuery,
} = selectmenuApi;
