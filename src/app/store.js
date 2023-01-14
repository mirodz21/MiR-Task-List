import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../slice/todo.slice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});
