import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        style={{ height: '250px', objectFit: 'cover' }}
        onClick={() => navigate(`/product/${product._id}`)}
      />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>₹{product.price}</Card.Text>
        <Button variant="dark" onClick={() => addToCart(product)}>
          Add to Cart +
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;