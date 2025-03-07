import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home'
import About from './components/About/About'
import Store from './components/Store/Store'
import NavbarComp from "./components/NavBar/NavbarComp";
import Footer from "./components/Footer/Footer";
import './App.css'
const App = () => {
  return (
    <Router> {/* ✅ Router Wraps Everything */}
      <div className="main-content"> {/* ✅ Pushes footer to bottom */}
        <NavbarComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
