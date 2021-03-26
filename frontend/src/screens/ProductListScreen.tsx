import { useEffect } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, Row, Col } from 'react-bootstrap';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import Message from '../components/Message';
import Loader from '../components/Loader';

interface ProductListScreenProps {
  history: any;
}

const ProductListScreen: React.FC<ProductListScreenProps> = ({ history }) => {
  const { listProducts, deleteProduct } = useActions();
  const {
    productList: { loading, error, products },
    userLogin: { userInfo },
    productDelete: {
      success: successDelete,
      loading: loadingDelete,
      error: errorDelete,
    },
  } = useTypedSelector(state => state);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      listProducts();
    } else {
      history.push('/login');
    }
  }, [history, userInfo, successDelete]);

  const deleteHandler = (id: string) => {
    if (window.confirm('Are you sure?')) {
      deleteProduct(id);
    }
  };

  const createProductHandler = (product: any) => {
    console.log('create product');
  };

  return (
    <>
      <Row className='align-items-center'>
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className='text-right'>
          <Button className='my-3' onClick={createProductHandler}>
            <i className='fas fa-plus' /> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant='danger'>{errorDelete}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATHEGORY</th>
              <th>BRAND</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product._id}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.category}</td>
                <td>{product.brand} </td>
                <td>
                  <LinkContainer to={`/admin/product/${product._id}/edit`}>
                    <Button variant='light' className='btn-sm'>
                      <i className='fas fa-edit'></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant='danger'
                    className='btn-sm'
                    onClick={() => deleteHandler(product._id)}
                  >
                    <i className='fas fa-trash'></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default ProductListScreen;
