import { createSlice } from "@reduxjs/toolkit";

const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    username: "",
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.username = action.payload.username;
      sessionStorage.setItem("username", action.payload.username);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.username = "";
      sessionStorage.removeItem("username");
    },
  },
});

export const { login, logout } = LoginSlice.actions;
export default LoginSlice.reducer;
