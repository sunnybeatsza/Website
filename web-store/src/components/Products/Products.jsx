import React from "react";
import { useSelector, useDispatch } from "react-redux";
import NavigationBar from "../Navbar/Navigationbar";
import ProductCard from "../Product/ProductCard"; // Update the import path
import "./Products.css";
import { addToCart } from "../Cart/CartSlice"; // Import the addToCart action

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch(); // Retrieve the dispatch function

  const handleAddToCart = (product) => {
    // Dispatch the addToCart action to update the cart
    dispatch(addToCart(product));

    // Update sessionStorage with the latest cart data
    const cartItems = JSON.stringify(
      JSON.parse(sessionStorage.getItem("cartItems") || "[]").concat(product)
    );
    const cartTotalValue =
      (parseInt(sessionStorage.getItem("cartTotalValue")) || 0) + product.price;

    sessionStorage.setItem("cartItems", cartItems);
    sessionStorage.setItem("cartTotalValue", cartTotalValue.toString());
  };

  return (
    <div>
      <NavigationBar />
      <h1>Products</h1>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.brand}
            color={product.color}
            price={product.price}
            onAddToCart={() => handleAddToCart(product)} // Pass the handler as a prop
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
