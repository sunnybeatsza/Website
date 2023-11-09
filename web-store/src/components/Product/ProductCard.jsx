import React from "react";

function ProductCard({ image, title, description, color, price, onAddToCart }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Color: {color}</p>
        <p>Price: R{price}.00</p>
        <button onClick={onAddToCart}>Buy</button>
      </div>
    </div>
  );
}

export default ProductCard;
