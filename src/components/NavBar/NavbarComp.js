import React from "react";
import "./NavbarComp.css";
import { NavLink, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "../Cart/CartButton";

const NavbarComp = () => {
  const location = useLocation(); 

  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link as={NavLink} to="/home" className={({ isActive }) => isActive ? "active-link" : ""}>HOME</Nav.Link>
            <Nav.Link as={NavLink} to="/store" className={({ isActive }) => isActive ? "active-link" : ""}>STORE</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>ABOUT</Nav.Link>
            <Nav.Link as={NavLink} to="/contactus" className={({ isActive }) => isActive ? "active-link" : ""}>CONTACT US</Nav.Link>

          </Nav>

          {location.pathname.startsWith("/store") && <CartButton />}
        </Container>
      </Navbar>

      <> 
        <h1 className="text-white m-1 band">The Generics
        {(location.pathname === "/" || location.pathname === "/home") && (
          
            <>
              <span className="album">Get our Latest Album</span>
              <button className="play-button">
              &#9658;
            </button>

            </>
        )}
        </h1>
      </>
    </header>
  );
};

export default NavbarComp;
