import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers';

const getItems: string | null = localStorage.getItem('cartItems');

const getUserInfo: string | null = localStorage.getItem('userInfo');

const getShippingAddress: string | null = localStorage.getItem(
  'shippingAddress'
);

const cartItemsFromStorage = getItems ? JSON.parse(getItems) : [];

const userInfoFromStorage = getUserInfo ? JSON.parse(getUserInfo) : null;

const shippingAddressFromStorage = getShippingAddress
  ? JSON.parse(getShippingAddress)
  : {};

const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
    paymentMethod: 'PayPal',
  },
  userLogin: { userInfo: userInfoFromStorage, loading: false, error: null },
};

export const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
