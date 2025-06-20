import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <div className="bg-primary text-white py-5 min-vh-100">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1>Welcome to ProdManager</h1>
            <p>
              Effortlessly manage your products with our all-in-one tool. Create, view, edit, and delete products — fast, simple, and reliable.
            </p>
            <Button variant="light" href="/products">Explore Products</Button>
          </Col>
          <Col md={6}>
            <img 
            src="https://cdn-icons-png.flaticon.com/512/1533/1533926.png" 
            alt="Product illustration" 
            className="img-fluid mt-4 mt-md-0"
            />

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
