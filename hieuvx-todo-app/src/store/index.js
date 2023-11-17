import { configureStore } from "@reduxjs/toolkit";
 import loginSlice from "../pages/Login/loginSlice";
import todoSlice from "../components/TodoList/todoSlice";
export const store = configureStore({
  reducer: {
    login: loginSlice,
    todo:todoSlice
  }
});
