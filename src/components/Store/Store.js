import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import "./Store.css"; // Import CSS

const productsArr = [
  {
    title: "Album 1",
    price: 12.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    title: "Album 2",
    price: 14.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    title: "Album 3",
    price: 9.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    title: "Album 4",
    price: 19.99,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Store = () => {
  return (
    <>
      <Container className="my-5">
        <h2 className="text-center mb-4 fw-bold">Music</h2>
        <Row className="g-4 justify-content-center">
          {productsArr.map((product, index) => (
            <Col xs={12} md={6} lg={5} key={index}>
              <div className="product-container">
                <h3 className="album-title">{product.title}</h3>
                <div className="image-container m-auto">
                  <img src={product.imageUrl} alt={product.title} className="zoom-image p-4" />
                </div>
                <div className="d-f flex-row justify-content-between">
                  <span className=" price m-3">${product.price}</span>
                <Button variant="primary " className="fw-bold add-to-cart">
                  ADD TO CART
                </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="d-flex justify-content-center">
        <Button variant="secondary" className="text-white fw-bold text-center"> See the Cart</Button>
        </div>

      </Container>
    </>
  );
};

export default Store;
