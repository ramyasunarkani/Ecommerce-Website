import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Store from "./components/Store/Store";
import NavbarComp from "./components/NavBar/NavbarComp";
import Footer from "./components/Footer/Footer";
import CartData from "./data/CartData";
import Cart from "./components/Cart/Cart";
import ContactUs from "./components/ContactUs/ContactUs";
import ProductPage from "./components/ProductsPage/ProductPage";
import "./App.css";
import Login from "./components/Login/Login";
import FormContext from "./contextApi/FormContext";

const ProtectedRoute = ({ children }) => {
  const formCtx = useContext(FormContext);
  
  // ✅ Redirect to login if not authenticated
  return formCtx.isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => {
  const formCtx = useContext(FormContext);
  const isLoggedIn = formCtx.isLoggedIn;

  return (
    <CartData>
      <Router>
        <div className="main-content">
          <NavbarComp />
          <Cart />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            
            <Route path="/home" element={<Home />} />
            
            {/* 🔥 Protected Store Route */}
            <Route
              path="/store"
              element={
                <ProtectedRoute>
                  <Store />
                </ProtectedRoute>
              }
            />

            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<ContactUs />} />

            {/* ✅ Protect Products Page */}
            <Route 
              path="/product/:title" 
              element={
                <ProtectedRoute>
                  <ProductPage />
                </ProtectedRoute>
              }
            />

            {/* ✅ Only show login if not already logged in */}
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/store" /> : <Login />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </CartData>
  );
};

export default App;
