import { setIntoLocalStorage } from "../../common/utils";
import { TOKEN_KEY } from "../../common/utils/constants";
import { baseApi } from "../../redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "auth/register",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          setIntoLocalStorage(TOKEN_KEY, result?.data?.data?.token);
        } catch (err) {
          console.log("err", err);
        }
      },
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          setIntoLocalStorage(TOKEN_KEY, result?.data?.data?.token);
        } catch (err) {
          console.log("err", err);
        }
      },
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
