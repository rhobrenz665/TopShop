import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';

const ProductCarousel: React.FC = () => {
  const { listTopProducts } = useActions();
  const {
    productTopRated: { loading, error, products },
  } = useTypedSelector(state => state);

  useEffect(() => {
    listTopProducts();
  }, []);

  const loader = <Loader />;
  const message = <Message variant='danger'>{error}</Message>;
  const productCarousel = (
    <Carousel pause='hover' className='bg-dark'>
      {products &&
        Array.isArray(products) &&
        products.map(p => (
          <Carousel.Item key={p._id}>
            <Link to={`/product/${p._id}`}>
              <Image src={p.image} alt={p.name} fluid />
              <Carousel.Caption className='carousel-caption'>
                <h2>
                  {p.name} (${p.price})
                </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
    </Carousel>
  );

  return <>{loading ? loader : error ? message : productCarousel}</>;
};

export default ProductCarousel;
