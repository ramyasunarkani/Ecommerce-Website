import React from "react";
import './NavbarComp.css';
import { Link, useLocation } from "react-router-dom";
import {  Container, Nav, Navbar } from "react-bootstrap";
import CartButton from "../Cart/CartButton";
const NavbarComp = () => {
  const location = useLocation(); 
  return (
    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" className="text-white active">HOME</Nav.Link>
            <Nav.Link as={Link} to="/store" className="text-white">STORE</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">ABOUT</Nav.Link>
          </Nav>

          {location.pathname === "/store" && (
           <CartButton/>
          )}
        </Container>
      </Navbar>

      <h1 className=" text-white m-1 band">
        The Generics
      </h1>
    </header>
  );
};

export default NavbarComp;
