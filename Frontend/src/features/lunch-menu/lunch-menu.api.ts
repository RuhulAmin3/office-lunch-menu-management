import { baseApi } from "../../redux/baseApi";

export const lunchmenuApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createLunchmenu: builder.mutation({
      query: (data) => ({
        url: "lunch-menu",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["lunch-menu"],
    }),

    getLunchmenus: builder.query({
      query: (date) => ({
        url: "lunch-menu",
        method: "GET",
        params: date,
      }),
      providesTags: ["lunch-menu"],
    }),

    uploadImages: builder.mutation({
      query: (images) => ({
        url: `https://api.cloudinary.com/v1_1/online-poco/image/upload`,
        method: "POST",
        body: images,
      }),
    }),
  }),
});

export const {
  useCreateLunchmenuMutation,
  useGetLunchmenusQuery,
  useUploadImagesMutation,
} = lunchmenuApi;
