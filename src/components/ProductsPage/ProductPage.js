import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";

const productDetails = {
  "Album 1": {
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
    ],
    reviews: [
      { user: "John Doe", comment: "Great album!" },
      { user: "Jane Smith", comment: "Loved it!" }
    ]
  },
  "Album 2": {
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
    ],
    reviews: [
      { user: "Alice Brown", comment: "Nice collection!" }
    ]
  },
  "Album 3": {
    images: [
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      "https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
    ],
    reviews: [
      { user: "Mike Lee", comment: "Awesome tracks!" }
    ]
  },
};

const ProductPage = () => {
  const { title } = useParams();
  const product = productDetails[title];

  if (!product) {
    return <h2 className="text-center my-5">Product not found</h2>;
  }

  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold">{title}</h2>
      <Row className="mt-4">
        <Col md={6}>
          {product.images.map((img, index) => (
            <Image key={index} src={img} alt={title} fluid className="mb-3" />
          ))}
        </Col>
        <Col md={6}>
          <h4>Reviews</h4>
          {product.reviews.map((review, index) => (
            <Card key={index} className="mb-2 p-2">
              <Card.Body>
                <Card.Title>{review.user}</Card.Title>
                <Card.Text>{review.comment}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
      <div className="text-center mt-4">
        <Link to="/">
          <Button variant="primary">Back to Store</Button>
        </Link>
      </div>
    </Container>
  );
};

export default ProductPage;
