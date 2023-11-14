import React, { useEffect } from "react";
import Login from "./pages/Login/Login.tsx";
import { setupServer } from "./fakeApi/index.js";
import { useSelector,useDispatch } from "react-redux";
import { checkAuthSelector } from "./store/selector.js";
if (process.env.NODE_ENV === 'development') {
  setupServer();
}
export default function App() {
  return <Login></Login>;
}
