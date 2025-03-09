import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaYoutube, FaSpotify, FaFacebook } from "react-icons/fa"; 
import { useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation(); 

  return (
    <footer className="bg-primary text-light py-3 mt-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
      <Container variant='primary '>
        <Row className="text-center">
          <Col className="d-flex flex-row justify-content-between" >
            <div className="mb-2 fs-1">The Generics</div>
            {location.pathname === "/home"&&(<div >
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaYoutube size={30} />
              </a>
              <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer" className="text-light me-3">
                <FaSpotify size={30} />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-light">
                <FaFacebook size={30} />
              </a>
            </div>)}
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
