import React from 'react';
import { Card } from 'react-bootstrap';
import { FaEdit, FaTrash } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <Card style={{ width: '20rem', alignItems:'center' }} key={product.id}>
      <Card.Img
        variant="top"
        src={product.image}
        style={{ height: '200px', objectFit: 'cover' }}
        />

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="text-primary">${product.price}</span>
          <div className="d-flex gap-2">
            <FaEdit role="button" className="text-success" title="Edit" />
            <FaTrash role="button" className="text-danger" title="Delete" />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
