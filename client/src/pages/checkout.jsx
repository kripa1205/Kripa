import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Container, Form, Button } from 'react-bootstrap';

function Checkout() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
  };

  return (
    <>
      <Navbar />
      <Container className="my-5" style={{ maxWidth: '600px' }}>
        <h3 className="mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          Checkout 
        </h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your full name" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Delivery Address</Form.Label>
            <Form.Control type="text" placeholder="Street, City, Zip Code" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Your contact number" required />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Payment Method</Form.Label>
            <Form.Select required>
              <option value="">Select a method</option>
              <option value="cod">Cash on Delivery</option>
              <option value="card">Credit / Debit Card</option>
              <option value="upi">UPI</option>
            </Form.Select>
          </Form.Group>

          <Button variant="dark" type="submit" className="w-100">
            Place Order
          </Button>
        </Form>
      </Container>
      <Footer />
    </>
  );
}

export default Checkout;