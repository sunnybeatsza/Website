import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../components/Login/LoginSlice";

const store = configureStore({
  reducer: {
    login: LoginReducer,
  },
});

export default store;
