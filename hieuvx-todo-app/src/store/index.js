import { configureStore } from "@reduxjs/toolkit";
 import loginSlice from "../pages/Login/loginSlice";

export const store = configureStore({
  reducer: {
    user: loginSlice
  }
});
