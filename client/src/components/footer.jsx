import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-light text-dark py-5 mt-5 border-top">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 style={{ fontFamily: 'Playfair Display, serif' }}>Ivory Step</h5>
            <p style={{ fontStyle: 'italic' }}>
              Elevating every step with luxury-crafted footwear.
            </p>
          </Col>

          <Col md={4} className="mb-4">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li><a href="/contact" className="text-decoration-none text-dark">Contact Us</a></li>
              <li><a href="/faq" className="text-decoration-none text-dark">FAQ</a></li>
              <li><a href="/returns" className="text-decoration-none text-dark">Returns & Refunds</a></li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h6 className="fw-bold">Follow Us</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none text-dark">Instagram</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Pinterest</a></li>
              <li><a href="#" className="text-decoration-none text-dark">Facebook</a></li>
            </ul>
          </Col>
        </Row>

        <hr />

        <p className="text-center text-muted small mb-0">
          © {new Date().getFullYear()} Ivory Step. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;