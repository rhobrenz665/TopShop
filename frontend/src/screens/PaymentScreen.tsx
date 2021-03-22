import { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';
import { useActions } from '../hooks/use-actions';
import { useTypedSelector } from '../hooks/use-typed-selector';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';

interface PaymentScreenProps {
  history: any;
}

const PaymentScreen: React.FC<PaymentScreenProps> = ({ history }) => {
  const {
    cart: { shippingAddress },
  } = useTypedSelector(state => state);
  const { savePaymentMethod } = useActions();

  if (!shippingAddress) history.push('/shipping');

  const [paymentMethod, setPaymentMethod] = useState<string>('PayPal');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    savePaymentMethod(paymentMethod);
    history.push('/placeorder');
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>

          <Col>
            <Form.Check
              type='radio'
              label='PayPal or Credit Card'
              id='PayPal'
              name='paymentMethod'
              value='PayPal'
              checked
              onChange={e => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
