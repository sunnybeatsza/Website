import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const itemCount = cart.items.length;

  return (
    <div>
      <h1>Cart</h1>
      <p>Number of Items in Cart: {itemCount}</p>
      <ul>
        {cart.items.map((item, index) => (
          <li key={index}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <p>Total Value: ${cart.totalValue}</p>
    </div>
  );
};

export default Cart;
