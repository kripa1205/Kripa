import React from 'react';
import Navbar from '../components/navbar';
import HeroBanner from '../components/herobanner';
import AdCarousel from '../components/adcarousal';
import FeaturedCarousel from '../components/featuredcarousal';
import Footer from '../components/footer';
import { Container } from 'react-bootstrap';

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Banner full width */}
      <HeroBanner />

      {/* Advertisement Carousel */}
      <Container fluid className="my-4">
        <AdCarousel />
      </Container>

      {/* Featured Products Carousel */}
      <Container fluid className="my-5">
        <FeaturedCarousel />
      </Container>

      <Footer />
    </>
  );
}

export default Home;