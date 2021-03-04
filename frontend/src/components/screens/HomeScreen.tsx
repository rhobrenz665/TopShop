import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../../products';
import Product from '../Product';

export interface ProductProps {
  _id?: string;
  name?: string;
  image?: string;
  description?: string;
  brand?: string;
  category?: string;
  price?: number;
  countInStock?: number;
  rating?: number;
  numReviews?: number;
}

const HomeScreen: React.FC<ProductProps> = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
