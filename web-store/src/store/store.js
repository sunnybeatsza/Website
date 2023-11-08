import { configureStore } from "@reduxjs/toolkit";
import LoginReducer from "../components/Login/LoginSlice";
import ProductsReducer from "../components/Products/ProductsSlice";

const store = configureStore({
  reducer: {
    login: LoginReducer,
    products: ProductsReducer,
  },
});

export default store;
