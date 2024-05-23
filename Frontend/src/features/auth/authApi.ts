import { setIntoLocalStorage } from "../../common/utils";
import { baseApi } from "../../redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ data }) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          console.log(result);
          setIntoLocalStorage("accessToken", result.data.accessToken);
        } catch (err) {
          console.log("err", err);
        }
      },
    }),
  }),
});

export const { useRegisterMutation } = authApi;
