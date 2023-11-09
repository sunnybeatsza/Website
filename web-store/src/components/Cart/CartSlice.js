import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalValue: 0,
  },
  reducers: {
    addToCart(state, action) {
      state.items.push(action.payload); // Add item to cart
      state.totalValue += action.payload.price; // Update total value
      alert("Item added to cart!");
      // Update total value using reduce on item prices
      state.totalValue = state.items.reduce(
        (total, item) => total + item.price,
        0
      );

      // Update cart data in sessionStorage
      sessionStorage.setItem("cartItems", JSON.stringify(state.items));
      sessionStorage.setItem("cartTotalValue", state.totalValue.toString());
    },
    // Implement other actions for removing items, updating quantities, etc.
  },
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
