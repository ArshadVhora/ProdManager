import React from "react";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HiFolderRemove  } from "react-icons/hi";

const EmptyComponent = ({ message }) => {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "300px" }}>
      <Row>
        <Col className="text-center">
         <HiFolderRemove  size={200} /> 
          <div>{message}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default EmptyComponent;
