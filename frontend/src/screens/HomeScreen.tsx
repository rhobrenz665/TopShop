import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import Message from '../components/Message';
import Loader from '../components/Loader';

import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';
import Meta from '../components/Meta';

interface HomeScreenProps {
  match: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ match }) => {
  const { listProducts } = useActions();
  const {
    productList: { products, loading, error, page, pages },
  } = useTypedSelector(state => state);

  const keyword: string = match.params.keyword;
  const pageNumber: any = match.params.pageNumber || 1;

  useEffect(() => {
    listProducts(keyword, pageNumber);
  }, [keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to='/' className='btn btn-light'>
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.length &&
              products.map(product => (
                <Col key={product._id} sm={12} md={6} lg={4}>
                  <Product product={product} />
                </Col>
              ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
            isAdmin={false}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
