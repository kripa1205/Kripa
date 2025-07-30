// import React, { useEffect, useState } from 'react';
// import { Card, Row, Col, Container } from 'react-bootstrap';
// import axios from 'axios';

// function FeaturedCarousel() {
//     const [featured, setFeatured] = useState([]);

//     useEffect(() => {
//         axios.get('http://localhost:5000/api/products/featured')
//             .then(res => setFeatured(res.data))
//             .catch(err => console.error('Failed to load featured products', err));
//     }, []);

//     return (
//         <Container className="my-5">
//             <h3 className="mb-4">Featured Picks</h3>
//             <Row>
//                 {featured.map((item, idx) => (
//                     <Col md={4} key={idx} className="mb-4">
//                         <Card className="h-100">
//                             <Card.Img variant="top" src={item.img || ''} alt={item.name} />
//                             <Card.Body>
//                                 <Card.Title>{item.name}</Card.Title>
//                                 <Card.Text>${item.price}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// export default FeaturedCarousel;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function FeaturedCarousel() {
  const [featured, setFeatured] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFeatured = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/products/featured'); // ✅ NO trailing slash
        setFeatured(res.data);
      } catch (err) {
        console.error('Failed to load featured products:', err);
      }
    };
    fetchFeatured();
  }, []);

  return (
    <div className="my-5">
      <h4 className="text-center mb-4">Featured</h4>
      {featured.length > 0 ? (
        <Carousel>
          {featured.map((product) => (
            <Carousel.Item key={product._id} onClick={() => navigate(`/product/${product._id}`)} style={{ cursor: 'pointer' }}>
              <img
                src={product.image}
                alt={product.name}
                className="d-block w-100"
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <Carousel.Caption>
                <h5>{product.name}</h5>
                <p>₹{product.price}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <p className="text-center">No featured products found.</p>
      )}
    </div>
  );
}

export default FeaturedCarousel;