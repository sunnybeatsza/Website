import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../components/Login/LoginSlice";
import productsReducer from "../components/Products/ProductsSlice";
import cartReducer from "../components/Cart/CartSlice"; // Path to your carts reducer

const store = configureStore({
  reducer: {
    login: loginReducer,
    products: productsReducer,
    cart: cartReducer, // Adding the carts reducer
    // Add other reducers if available
  },
});

export default store;
