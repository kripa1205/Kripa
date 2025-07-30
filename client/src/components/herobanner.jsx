import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // ✅ Add this import

function HeroBanner() {
  return (
    <div className="hero-section text-center text-dark py-5">
      <Container>
        <h1 className="display-5">
          Step into <span style={{ fontFamily: 'Playfair Display, serif' }}>Confidence</span>
        </h1>
        <p className="lead">Luxury Footwear Made Just for You</p>

        {/* ✅ Wrap the button with Link for navigation */}
        <Link to="/products">
          <Button variant="dark">Shop Now</Button>
        </Link>
      </Container>
    </div>
  );
}

export default HeroBanner;