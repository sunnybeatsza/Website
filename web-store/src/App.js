import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
