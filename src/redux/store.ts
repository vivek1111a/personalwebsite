import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blog";
import projectReducer from "./project";

const store = configureStore({
  reducer: {
    blog: blogReducer,
    project: projectReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
