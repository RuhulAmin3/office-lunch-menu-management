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
  }),
});

export const { useCreateLunchmenuMutation } = lunchmenuApi;
