import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { ActionType } from '../state';

interface UserEditScreenProps {
  match: any;
  history: any;
}

const UserEditScreen: React.FC<UserEditScreenProps> = ({ match, history }) => {
  const { getUserDetails, updateUser } = useActions();
  const {
    userDetails: { loading, error, user },
    userUpdate: {
      loading: loadingUpdate,
      error: errorUpdate,
      success: successUpdate,
    },
  } = useTypedSelector(state => state);

  const dispatch = useDispatch();

  const userId = match.params.id;

  const [name, setName] = useState<null | string>('');
  const [email, setEmail] = useState<null | string>('');
  const [isAdmin, setIsAdmin] = useState<null | boolean>(false);

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: ActionType.USER_UPDATE_RESET });
      history.push('/admin/userlist');
    } else {
      if (!user.name || user._id !== userId) {
        getUserDetails(userId);
      } else {
        setName(user.name);
        setEmail(user.email);
        setIsAdmin(user.isAdmin);
      }
    }
  }, [dispatch, history, userId, user, successUpdate]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser({ _id: userId, name, email, isAdmin });
  };

  return (
    <>
      <Link to='/admin/userlist' className='btn btn-light my-3'>
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : name && email && isAdmin !== null ? (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId='name'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter name'
                value={name}
                onChange={e => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='email'>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={email}
                onChange={e => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId='isAdmin'>
              <Form.Check
                type='checkbox'
                label='Is Admin'
                checked={isAdmin}
                onChange={e => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>
            <Button type='submit' variant='primary'>
              Register
            </Button>
          </Form>
        ) : null}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
