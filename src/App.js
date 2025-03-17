import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import NavbarComp from "./components/NavBar/NavbarComp";
import Footer from "./components/Footer/Footer";
import CartData from "./data/CartData";
import Cart from "./components/Cart/Cart"; // ✅ Import Cart
import ContactUs from "./components/ContactUs/ContactUs";
import "./App.css";

const App = () => {
  return (
    <CartData>
      <Router>
        <div className="main-content">
          <NavbarComp />
          <Cart/>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs/>}/>
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartData>
  );
};

export default App;
