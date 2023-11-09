import React from "react";
import "./ProductPage.css";
import NavigationBar from "../Navbar/Navigationbar";
import Footer from "../Footer/Footer";

const ProductPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="main-container text-light">
        <div className="container-left m-3">
          <h2>Smaller Photos</h2>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>

        <div className="container-right m-3">
          <h2>Product Main</h2>
          <img src="" alt="" />
        </div>

        <div className="container-info m-3">
          <h2>Product description</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
