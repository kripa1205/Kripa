import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Failed to fetch product:', err);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center py-5">Loading...</p>;

  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col xs={12} md={6} className="mb-4 mb-md-0">
          <Image
            src={product.image}
            fluid
            className="w-100 rounded"
            style={{ maxHeight: '450px', objectFit: 'cover' }}
          />
        </Col>
        <Col xs={12} md={6}>
          <h2 style={{ fontFamily: 'Playfair Display, serif' }}>{product.name}</h2>
          <p>{product.description}</p>
          <h4 className="mb-4">₹{product.price}</h4>
          <Button variant="dark" size="lg" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;