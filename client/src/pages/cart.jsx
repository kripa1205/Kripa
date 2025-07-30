import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <Container className="py-4">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
        <Button variant="outline-dark" onClick={() => navigate('/products')}>
          Go Shopping
        </Button>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h2 className="mb-4">Your Cart</h2>
      {cartItems.map((item) => (
        <Row key={item._id} className="mb-3 align-items-center border-bottom pb-3">
          <Col md={2}>
            <Image src={item.image} fluid style={{ height: '100px', objectFit: 'cover' }} />
          </Col>
          <Col md={4}>
            <h5>{item.name}</h5>
            <p>₹{item.price}</p>
          </Col>
          <Col md={2}>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item._id, parseInt(e.target.value))}
              className="form-control"
            />
          </Col>
          <Col md={2}>
            <p>₹{item.price * item.quantity}</p>
          </Col>
          <Col md={2}>
            <Button variant="danger" onClick={() => removeFromCart(item._id)}>
              Remove
            </Button>
          </Col>
        </Row>
      ))}

      <h4 className="mt-4">Total: ₹{getTotalPrice()}</h4>
      <Button variant="dark" className="mt-3" onClick={() => navigate('/checkout')}>
        Proceed to Checkout
      </Button>
    </Container>
  );
};

export default Cart;