import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blog";

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
