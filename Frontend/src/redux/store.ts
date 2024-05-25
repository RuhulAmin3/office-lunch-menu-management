import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { lunchMenuReducer } from "../features/lunch-menu/lunch-menu.slice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    lunchMenu: lunchMenuReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
