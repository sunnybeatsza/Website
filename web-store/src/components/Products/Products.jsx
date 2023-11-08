import React from "react";
import { useSelector } from "react-redux";
import NavigationBar from "../Navbar/Navigationbar";
import ProductCard from "../Product/ProductCard"; // Update the import path
import "./Products.css";

function Products() {
  const products = useSelector((state) => state.products);

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
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
