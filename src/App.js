import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import NavbarComp from "./components/NavBar/NavbarComp";
import Footer from "./components/Footer/Footer";
import CartData from "./data/CartData";
import Cart from "./components/Cart/Cart"; // ✅ Import Cart

import "./App.css";

const App = () => {
  return (
    <CartData>
      <Router>
        <div className="main-content">
          <NavbarComp />
          <Cart /> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartData>
  );
};

export default App;
