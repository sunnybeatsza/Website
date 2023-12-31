import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./components/Login/Login";
import Landing from "./components/Landing/Landing";
import RegisterForm from "./components/Register/Register";
import Products from "./components/Products/Products";
import ProductPage from "./components/Product/ProductPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/Register" element={<RegisterForm />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
