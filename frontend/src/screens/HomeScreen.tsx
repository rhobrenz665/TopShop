import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';

import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import { Products } from '../state';

const HomeScreen: React.FC = () => {
  const { listProducts } = useActions();
  const {
    productList: { products, loading, error },
  } = useTypedSelector(state => state);

  useEffect(() => {
    listProducts();
  }, []);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {products.length &&
            products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4}>
                <Product product={product} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
